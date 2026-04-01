import pool from '../db.js'
export default async function(req,res){
    try{
        const {questionsId} =req.params
        if(questionsId){
            const resu=await pool.query(`
                SELECT 
                questions.id,
                title,
                body,
                questions.author_name,
                questions.created_at,
                accepted_answers_id,
                answers.id AS answer_id,
                content,
                answers.author_name AS answer_author_name,
                answers.created_at AS answer_created_at 
                FROM questions
                LEFT JOIN answers ON question_id=questions.id
                WHERE questions.id=$1
                ;`,[questionsId])
            if(resu.rows.length===0){
                res.status(404)
                res.json({error:"Question not found"})
                return
            }
            const result=resu.rows[0]
            let final={
                id:result.id,
                title:result.title,
                body:result.body,
                created_at:result.created_at,
                author_name:result.author_name,
                accepted_answer_id:result.accepted_answer_id,
                answers:resu.rows.map(question=>{
                    return {
                        answer_id:question.answer_id,
                        content:question.content,
                        answer_author_name:question.answer_author_name,
                        answer_created_at:question.answer_created_at
                    }
                })
            }
            res.status(200)
            res.json(final)
            return
        }
        const result=await pool.query(`
                SELECT questions.id,title,body,questions.created_at,COUNT(answers.id) AS answer_count,accepted_answers_id FROM questions
                LEFT JOIN answers ON question_id=questions.id
                GROUP BY questions.id,title,body,questions.created_at,accepted_answers_id
                ORDER BY questions.id
                ;`
                    )
        res.status(200)
        res.json(result.rows)
    }catch(err){
        console.error(err)
        res.status(500).send('DB connection failed')
    }
}
import pool from '../db.js'

export default async function(req,res){
    const id=req.params.id
    try{
        const questionIdResult=await pool.query(`
            SELECT question_id FROM answers WHERE id=$1
            `,[id])
        if(questionIdResult.rows.length===0){
            res.status(404).json({error:"Answer not found with this id"})
            return
        }
        const questionId=questionIdResult.rows[0].question_id
        const result=await pool.query(`
            UPDATE questions SET accepted_answers_id=$1 WHERE id=$2
            RETURNING *
            `,[id,questionId])
        res.status(200)
        res.json(result.rows)
    }catch(err){
        console.error(err)
        res.status(500).send("Failed to send to DB")
    }
}
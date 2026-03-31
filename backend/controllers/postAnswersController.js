import pool from '../db.js'

export default async function(req,res){
    try{
        let {content,author_name}=req.body
        const id=req.params.id
        const idExists=await pool.query('SELECT 1 FROM questions WHERE id=$1',[id])
        if(idExists.rows.length===0||!content||!author_name){
            res.status(400)
            .json({
                error:"Missing required params or question id is not valid. content,author_name are required params and id entered in url should be valid questions id"
            })
            return
        }else{
            content=content.trim()
            author_name=author_name.trim()
             if(idExists.rows.length===0||!content||!author_name){
                res.status(400)
                .json({
                    error:"Missing required params or question id is not valid. content,author_name are required params and id entered in url should be valid questions id"
                })
                return
             }
        }
        const result=await pool.query(`
            INSERT INTO answers(content,author_name,question_id)
            VALUES ($1,$2,$3) 
            RETURNING *
            `,[content,author_name,id])
        console.log(result)
        res.status(201).json(result.rows)

    }catch(err){
        console.error(err)
        res.status(500).send("Failed to send to DB")
    }
}
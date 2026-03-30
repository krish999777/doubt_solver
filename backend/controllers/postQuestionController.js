import pool from '../db.js'
export default async function(req,res){
    const {title,body,author_name}=req.body
    const result=await pool.query(`INSERT INTO questions(
            title,body,author_name
        )
        VALUES($1,$2,$3);`,
        [title, body, author_name]
    )
    res.status(200)
    res.json(result.rows)
}
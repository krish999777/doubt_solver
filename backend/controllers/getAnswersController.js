import pool from '../db.js'
export default async function(req,res){
    try{
        const {answersId} =req.params
        if(answersId){
            const result=await pool.query(`SELECT content,author_name FROM answers WHERE id=${answersId}`)
            if(result.rows.length===0){
                res.status(404)
                res.json({error:"Question not found"})
                return
            }
            res.status(200)
            res.json(result.rows[0])
            return
        }
        const result=await pool.query('SELECT content,author_name FROM answers')
        res.status(200)
        res.json(result.rows)
    }catch(err){
        console.error(err)
        res.status(500).send('DB connection failed')
    }
}
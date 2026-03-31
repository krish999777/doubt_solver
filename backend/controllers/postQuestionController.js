import pool from '../db.js'
export default async function(req,res){
    let {title,body,author_name}=req.body
    if(!title||!body||!author_name){
        res.status(400)
        res.json({error:"Missing required parameters. All the title,body and author_name are required params"})
        return
    }else{
        title=title.trim()
        body=body.trim()
        author_name=author_name.trim()
        if(!title||!body||!author_name){
            res.status(400)
            res.json({error:"Missing required parameters. All the title,body and author_name are required params"})
            return
        }
    }
    try{
        const result=await pool.query(`INSERT INTO questions(
                title,body,author_name
            )
            VALUES($1,$2,$3)
            RETURNING *;`,
            [title, body, author_name]
        )
        res.status(201)
        res.json(result.rows)
    }catch(err){
        console.error(err)
        res.status(500).send("DB connection failed")
    }
}
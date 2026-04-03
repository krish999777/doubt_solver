import express from 'express'
import cors from 'cors'
import {router} from './routers/router.js'

const app=express()
const PORT=8000
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://doubt-solver-pi.vercel.app"
  ]
}))
app.use(express.json())
app.use('/',router)


app.listen(PORT,()=>console.log("Port listening at port "+PORT))
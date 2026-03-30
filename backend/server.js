import express from 'express'
import cors from 'cors'
import {getRouter} from './routers/getRouter.js'

const app=express()
const PORT=8000
app.use(cors())

app.use('/',getRouter)


app.listen(PORT,()=>console.log("Port listening at port "+PORT))
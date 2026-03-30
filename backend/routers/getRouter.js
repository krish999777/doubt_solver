import express from 'express'
import answers from '../controllers/answerController.js'
import questions from '../controllers/questionsController.js'

export const getRouter=express.Router()
    getRouter.get('/answers/:answersId',answers)
    getRouter.get('/answers',answers)
    getRouter.get('/questions/:questionsId',questions)
    getRouter.get('/questions',questions)
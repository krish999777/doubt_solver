import express from 'express'
import answers from '../controllers/getAnswersController.js'
import questions from '../controllers/getQuestionsController.js'

export const router=express.Router()
    router.get('/answers/:answersId',answers)
    router.get('/answers',answers)
    router.get('/questions/:questionsId',questions)
    router.get('/questions',questions)
    router.post('/question')


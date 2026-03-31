import express from 'express'
import getAnswers from '../controllers/getAnswersController.js'
import getQuestions from '../controllers/getQuestionsController.js'
import postQuestions from '../controllers/postQuestionController.js'
import postAnswers from '../controllers/postAnswersController.js'

export const router=express.Router()
    router.get('/answers/:answersId',getAnswers)
    router.get('/answers',getAnswers)
    router.get('/questions/:questionsId',getQuestions)
    router.get('/questions',getQuestions)
    router.post('/questions',postQuestions)
    router.post('/questions/:id/answers',postAnswers)


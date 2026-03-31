import express from 'express'
import getAnswers from '../controllers/getAnswersController.js'
import getQuestions from '../controllers/getQuestionsController.js'
import postQuestions from '../controllers/postQuestionController.js'
import postAnswers from '../controllers/postAnswersController.js'
import postAcceptAnswer from '../controllers/postAcceptAnswer.js'

export const router=express.Router()
    router.get('/answers/:answersId',getAnswers)
    router.get('/answers',getAnswers)
    router.get('/questions/:questionsId',getQuestions)
    router.get('/questions',getQuestions)
    router.post('/questions',postQuestions)
    router.post('/questions/:id/answers',postAnswers)
    router.post('/answers/:id/accept',postAcceptAnswer)


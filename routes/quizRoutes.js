const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/test', quizController.test);

router.get('/', quizController.getQuizzes);

router.get('/:id', quizController.getQuizById);

router.put('/vote/:id', quizController.voteQuiz);

router.post('/create', quizController.createQuiz);

module.exports = router;
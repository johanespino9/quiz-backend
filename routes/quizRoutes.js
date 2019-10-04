const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/test', quizController.test);

router.post('/create', quizController.createQuiz);

router.put('/vote/:id', quizController.voteQuiz);

module.exports = router;
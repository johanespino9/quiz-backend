const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/test', quizController.test);

router.get('/', quizController.getQuizzes);

router.get('/:id', quizController.getQuizById);

router.put('/vote/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const quiz = await quizController.voteQuiz(id, req.body)
      res.json(quiz);
    } catch (err) {
      res.status(500).send(`Error en la db.`)
    }
  });

router.post('/create', quizController.createQuiz);

module.exports = router;
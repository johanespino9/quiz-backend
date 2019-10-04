const Quiz = require('../models/quiz');

exports.test = function (req, res) {
    res.send(' MI API FUNCIONA!!! :D ');
}

exports.createQuiz = async function (req, res) {
    let quiz = new Quiz(req.body);

    await quiz.save();
    res.send('Quiz creada exitosamente ! :D')
}

exports.voteQuiz = async function (id, quiz) {
  return Quiz.findOneAndUpdate({ _id: id}, {
    ...quiz
  }, { new: true });
}

exports.getQuizById = async function (req, res) {
    let quiz = await Quiz.findById({_id: req.params.id})
    res.json(quiz);
}

exports.getQuizzes = async function (req, res) {
    let quizzes = await Quiz.find({ })
    res.json(quizzes);
}

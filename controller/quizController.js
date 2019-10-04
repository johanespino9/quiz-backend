const Quiz = require('../models/quiz');

exports.test = function (req, res) {
    res.send(' MI API FUNCIONA!!! :D ');
}

exports.createQuiz = async function (req, res) {
    let quiz = new Quiz(req.body);

    await quiz.save();
    res.send('Quiz creada exitosamente ! :D')
}
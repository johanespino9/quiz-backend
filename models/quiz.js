const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    title: String,
    options: [
        {
            title: String,
            count: Number,
        }
    ],
    createdBy: String,
    img: String,
    winner: String
});

module.exports = mongoose.model('Quiz', QuizSchema);
const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quizRoutes');
const mongoose = require('mongoose');

const api = express();
api.use(bodyParser.json());

try{
    mongoose.connect('mongodb+srv://johan:XGqPr9A9Iyp7gnlG@cluster0-wxzry.mongodb.net/quizapp?retryWrites=true&w=majority', { useNewUrlParser: true })
}catch(error){
    console.log(error)
}

api.use('/quiz', quizRouter);

let port = 8080;

api.listen(port, () => {
    console.log('Servidor iniciado! :D ' + 'Puerto: ' + port);
})


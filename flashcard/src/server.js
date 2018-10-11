const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express()

// Bodyparser Middleware
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoDB connected')
});

app.get('/', function (req, res) {
    res.send('hello world')
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
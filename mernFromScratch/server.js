const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
const port = 8080

//initialize body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var db = require('./db/config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

var routes = require('./routes/index')
app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
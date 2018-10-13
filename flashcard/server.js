const express = require('express')
const bodyParser = require('body-parser')

const items = require('./routes/projects');

var app = express()

// Bodyparser Middleware
app.use(bodyParser.json());

const db = require('./db/index')

app.use('/', require('./routes/projects'))

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
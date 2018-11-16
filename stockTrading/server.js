const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db connection
var db = require('./db/connection')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
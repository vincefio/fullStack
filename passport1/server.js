const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var User = require('./models/Users')
const app = express()

app.use(express.static('public'))

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('database connected')
});



app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/home.html")))

app.post('/subscribe', (req, res) => {
    console.log(req.body)
    User.create(req.body, function (err) {
        if (err) return err;
    })

    res.end('doneeee')
})

app.listen(8080, () => console.log('Example app listening on port 8080'))
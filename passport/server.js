const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(express.static('public'))

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', (req, res) => res.send('home.html'))

app.listen(8080, () => console.log('Example app listening on port 8080'))
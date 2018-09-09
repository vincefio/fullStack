var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
const path = require('path')
const dbConnection = require('./db') // loads our connection to the mongo database

//Initialize App
const app = express()




// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

/* Express app ROUTING */
app.use('/auth', require('./auth'))
const router = express.Router()


app.use(passport.initialize());
app.use(passport.session());


app.listen(8080, () => console.log('Example app listening on port 8080'))
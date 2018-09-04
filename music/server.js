const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
var flash = require('connect-flash')
var expressValidator = require('express-validator')
var User = require('./models/Users')
var session = require("express-session")
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

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator());

app.use(flash())

//global vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})


app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/home.html")))

app.post('/register', (req, res) => {
    //console.log(req.body)
    var name = req.body.username;

    req.checkBody('username', 'Name is required').notEmpty();

    var errors = req.validationErrors()

    if (errors) {
        console.log('YES')
    } else {
        console.log('NO')
    }

    /*User.create(req.body, function (err) {
        if (err) return err;
    })

    res.end('doneeee')*/
})

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.findOne({ username: username }, function (err, user) {
                if (err) throw err;
                if (user.password != password) {
                    return done(null, false, { message: 'Incorrect Password' })
                }
                return done(null, user)
            })

            /*User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' })
                }
            })*/
        })
    }
));

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    },
        function (req, res) {
            res.redirect('/')
        })
);

app.listen(8080, () => console.log('Example app listening on port 8080'))
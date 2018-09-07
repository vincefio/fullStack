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

var routes = require('./routes/index')
var users = require('./routes/users')

var User = require('./models/Users')
const app = express()

//app.use(express.static('public'))
// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));//layout.handlebars
app.set('view engine', 'handlebars');


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Express Validator
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));



app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash())

//global vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

app.use('/', routes);
app.use('/users', users);


/*app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/home.html")))

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

    res.end('doneeee')
})*/

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

/*app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    },
        function (req, res) {
            res.redirect('/')
        })
);*/

app.listen(8080, () => console.log('Example app listening on port 8080'))
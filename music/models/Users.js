/*var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
})

var User = module.exports = mongoose.model('users', userSchema)


module.exports.getUserByUsername = function (username, callback) {
    var query = { username: username };
    User.findOne(query, callback)
}

module.exports.comparePassword = function (candidatePassword, password, callback) {

}*/

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('database connected')
});

// User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}



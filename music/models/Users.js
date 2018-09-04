var mongoose = require('mongoose')
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

}


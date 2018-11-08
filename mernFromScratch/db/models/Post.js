var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String }]
})

var Post = mongoose.model('post', postSchema)

module.exports = Post
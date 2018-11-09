var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    title: String,
    items: [{ body: String }]
})

var Category = mongoose.model('category', categorySchema)

module.exports = Category
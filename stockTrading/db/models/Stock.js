var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    name: String,
    id: String
});

//create model
var Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock
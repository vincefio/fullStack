var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    name: String,
    symbol: String,
});

var StockList = mongoose.model('Stock', stockSchema);

modules.export = StockList;
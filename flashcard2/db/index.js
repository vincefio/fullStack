const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flashcard', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoDB connected')
});

module.exports = db

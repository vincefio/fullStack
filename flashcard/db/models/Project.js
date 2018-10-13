var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    projects: [{ front: String, back: String }]
});

//create model
var Project = mongoose.model('Project', blogSchema);

module.exports = User
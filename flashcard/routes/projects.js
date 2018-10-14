const express = require('express')
const router = express.Router()
const Project = require('../db/models/Project')

router.get('/', (req, res) => {
    res.send('hello world')
});

router.post('/db', (req, res) => {
    Project.create({ projectName: 'First Project' }, { projects: [{ front: 'test front' }, { back: 'test back' }] })
    res.end
})

router.post('/newDocument', (req, res) => {
    console.log(req.body)
    var newProject = new Project(req.body)
    newProject.save(function (err) {
        if (err) return handleError(err)
    })
    //create new collection when user creates a new project
    /*Project.createCollection().then(function (collection) {
        console.log('Collection is created!');
    });*/
    //create new document for each new 'project'


    res.send(req.body.projectName)
})

module.exports = router;
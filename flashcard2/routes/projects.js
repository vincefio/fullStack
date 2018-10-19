const express = require('express')
const router = express.Router()
const Project = require('../db/models/Project')

router.get('/', (req, res) => {
    res.send('hello world')
});

router.post('/db', (req, res) => {
    Project.create({ projectName: 'First Project' }, { projects: [{ front: 'test front' }, { back: 'test back' }] })
    res.end()
})

router.get('/projects', (req, res) => {
    //console.log('project get hit')

    let results = '';

    Project.find({}, function (err, res) {
        results = res;
    })
        .then(function () {
            console.log('results ' + results)
            res.send(results)
        })



})

router.post('/newDocument', (req, res) => {
    console.log(req.body)
    var newProject = new Project(req.body)
    newProject.save(function (err) {
        if (err) return handleError(err)
    })

    //res.send(req.body.projectName)
    res.redirect('/projects')
})

module.exports = router;
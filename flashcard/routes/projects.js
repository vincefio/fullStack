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

router.post('/newCollection', (req, res) => {
    console.log(req.body)
    //create new collection when user creates a new project
    Project.createCollection().then(function (collection) {
        console.log('Collection is created!');
    });

    res.send('new collection')
})

module.exports = router;
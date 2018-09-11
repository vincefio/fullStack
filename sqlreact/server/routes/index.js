const express = require('express')
const router = express.Router()
const db = require('../db/index')
const User = require('../db/index')

router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE sqlreact'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('database created')
    })
})

router.post('/signup', function (req, res) {
    const isError = true;
    //console.log('signup hit at server')
    //console.log(req.body.username + ' ' + req.body.password)
    User.findAll({
        where: {
            userName: req.body.username
        }
    }).then(user => {
        console.log(user)
        if (user.length > 0) {
            console.log('there is a user with this username')
            res.send('CREATE NEW USER')
        } else {
            console.log('NO USER FOUND')
            res.send(isError)
        }
    });
})

module.exports = router
const express = require('express')
const router = express.Router()
const db = require('../db/index')

router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE sqlreact'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('database created')
    })
})

router.post('/signup', function (req, res) {
    console.log('signup hit at server')
    res.json(req.body)
})

module.exports = router
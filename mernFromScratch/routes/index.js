var express = require('express')
var router = express.Router()
const Category = require('../db/models/Category')

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/category', (req, res) => {
    var newCat = new Category(req.body)

    newCat.save(function (err) {
        if (err) return handleError(err)
    })

    res.send('document saved!')
})

module.exports = router;
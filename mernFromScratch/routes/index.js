var express = require('express')
var router = express.Router()
const Category = require('../db/models/Category')

//router.get('/', (req, res) => res.send('Hello World!'))

router.post('/category', (req, res) => {
    var newCat = new Category(req.body)

    newCat.save(function (err) {
        if (err) return handleError(err)
    })

    res.send('document saved!')
})

router.get('/categories', (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
})

module.exports = router;
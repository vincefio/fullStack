var express = require('express')
var router = express.Router()
var Stock = require('../db/models/Stock')

router.post('/newStock', (req, res) => {
    //console.log(req.body)

    var newStock = new Stock(req.body)
    newStock.save(function (err) {
        if (err) return handleError(err)

    })

    res.send('stock saved!')
})

module.exports = router;
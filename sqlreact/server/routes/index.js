const express = require('express')
const router = express.Router()



router.post('/signup', function (req, res) {
    //console.log('req at server ' + req.body)
    res.json(req.body)
})

module.exports = router
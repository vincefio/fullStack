var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    console.log('get hit')
    res.send('get hit')
})

module.exports = router;
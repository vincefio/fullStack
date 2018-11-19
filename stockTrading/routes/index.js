var express = require('express')
var router = express.Router()

/*router.get('/stocks', (req, res) => {
    console.log('get hit')
    res.send('get hit')
})*/

router.post('/newStock', (req, res) => {
    console.log('get hit')
    res.send('get hit')
})

module.exports = router;
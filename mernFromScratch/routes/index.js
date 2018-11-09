var express = require('express')
var router = express.Router()

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/category', (req, res) => {
    console.log(req.body)
    res.send('route hit')
})

module.exports = router;
const express = require('express')
const router = express.Router()

/*router.get('/api/customers', (req, res) => {
    const customers = [{
        id: 1, firstName: 'john', lastName: 'doe'
    }]

    res.json(customers)
})*/

router.post('/signup', function (req, res) {
    //console.log('req at server ' + req.body)
    res.json(req.body)
})

module.exports = router
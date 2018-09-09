const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
//const passport = require('../passport')

router.post('/signup', (req, res) => {
    // const { username, password } = req.body

    console.log('signup route hit in auth folder')
    //console.log('req body ' + JSON.stringify(req.body.username))
    // ADD VALIDATION
    User.findOne({ 'local.username': req.body.username }, (err, userMatch) => {
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${req.body.username}`
            })
        }
        const newUser = new User({
            'local.username': req.body.username,
            'local.password': req.body.password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
//const passport = require('../passport')

router.post('/signup', (req, res) => {
    //const { username, password } = req.body

    console.log('signup route hit in auth folder')
    // ADD VALIDATION
    /*User.findOne({ 'local.username': username }, (err, userMatch) => {
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        const newUser = new User({
            'local.username': username,
            'local.password': password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    })*/
})

module.exports = router
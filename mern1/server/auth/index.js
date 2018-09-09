const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../passport')

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        return res.json({ user: req.user })
    } else {
        return res.json({ user: null })
    }
})

router.post(
    '/login', function (req, res, next) {
        console.log('post hit in auth/index')
        //console.log(JSON.stringify(req.body))
        console.log('================')
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('POST to /login')
        console.log(req.user)
        const user = JSON.stringify(req.user)
        //  const user = JSON.parse(JSON.stringify(req.user)) // hack
        /*const cleanUser = Object.assign({}, user)
        if (cleanUser.local) {
            console.log(`Deleting ${cleanUser.local.password}`)
            delete cleanUser.local.password
        }*/
        // res.json({ user: user })
        res.json(req.user)
    }
)

router.post('/logout', (req, res) => {
    if (req.user) {
        req.session.destroy()
        res.clearCookie('connect.sid') // clean up!
        return res.json({ msg: 'logging you out' })
    } else {
        return res.json({ msg: 'no user to log out!' })
    }
})


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
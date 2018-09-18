const express = require('express')
const router = express.Router()
const db = require('../db/index')
const User = require('../db/index')
const bcrypt = require('bcrypt')
const saltRounds = 10;

router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE sqlreact'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('database created')
    })
})

router.post('/signup', function (req, res) {
    const isError = true;

    //ENCRYPT PASSWORD USING BCRYPT NPM PACKAGE
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        //console.log(`HASH IS ${hash}`)
        const hashedPassword = hash;
        //console.log('signup hit at server')
        //console.log(req.body.username + ' ' + req.body.password)
        User.findAll({
            where: {
                userName: req.body.username
            }
        }).then(user => {
            console.log(user)
            if (user.length > 0) {
                console.log('there is a user with this username')
                res.send(isError)
            } else {
                console.log('NO USER FOUND')
                console.log('============CREATE USER===========')
                User.create({
                    userName: req.body.username,
                    password: hashedPassword
                }).then(() =>
                    console.log('=========USER CREATED========')

                )

                res.send(false)
            }
        });
    });

})

router.post('/login', (req, res) => {
    //console.log('login route ' + JSON.stringify(req.body))
    /* bcrypt.compare(req.body.password, hash).then(function (res) {
         // res == true
         if (res) {
 
         }
     });*/

    User.findAll({
        where: {
            username: req.body.username
        }
    }).then(user => {
        // console.log('username ' + user)


        if (user.length > 0) {
            res.send('we have found this user in the database')
            console.log('user ' + user[0].password)
            //time to check if the password matches

        } else {
            res.send(false)
        }
    })
})

module.exports = router
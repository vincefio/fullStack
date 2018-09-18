import React, { Component } from 'react'
const axios = require('axios')

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            errors: {
                usernameError: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = (bool) => {

        let isError = false
        const errors = {}

        if (this.state.username === '') {
            isError = true
            errors.usernameError = 'Username is required'
        }

        if (this.state.password === '') {
            isError = true
            errors.passwordError = 'Password field is required'
        }

        /* if (bool) {
             isError = true
             errors.userNameTaken = 'This username is already in use'
         }*/

        if (isError) {
            this.setState({
                ...this.state,
                errors: { ...errors }
                //...errors
            })
        }

        return isError;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //console.log('HANDLESUBMIT HIT')
        const err = this.validate();

        // console.log('isError ' + err)
        if (err) {
            //clear form
            this.setState({
                username: '',
                password: '',
            })
        } else {
            axios.post('/login', {
                username: this.state.username,
                password: this.state.password
            }).then(response => {

                console.log('response ' + JSON.stringify(response.data))

                if (!response.data) {
                    //this means that there is no user in the database with this name
                    const errors = {}
                    errors.usernameError = "User not found"

                    this.setState({
                        ...this.state,
                        errors: { ...errors }
                    })
                }
                /*if (response.data === true) {
                    const errTwo = this.validate(response.data)
                } else {
                    console.log('CREATE THAT DAMN USER YO')
                    this.setState({
                        loggedIn: true
                    })
                    this.ifLoggedIn()
                }*/
            })
        }
    }

    render() {
        let errors = this.state.errors

        const errorOptions = Object.keys(errors).map((key, i) =>
            <div className="errorMessage" value={key} key={i} > {errors[key]}</div>
        )

        return (
            <div className="SignupForm container">
                <h1>Login form</h1>
                <form action="">
                    {errorOptions}
                    <div className="input-field">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        /*data-error={this.state.usernameError}*/
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" onClick={e => this.handleSubmit(e)}>Log In</button>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let isError = false
        const errors = {}

        if (this.state.username === '') {
            isError = true
            errors.usernameError = 'Username is required'
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            })
        }

        return isError;
    }

    handleSubmit(event) {
        event.preventDefault()

        const err = this.validate();
        console.log('isError ' + err)
        if (!err) {
            //clear form
            this.setState({
                username: '',
                password: '',
                confirmPassword: ''
            })
        }

        axios.post('/signup', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log('response ' + JSON.stringify(response.data))
        })
    }

    render() {
        return (
            <div className="SignupForm container">
                <h1>Signup form</h1>
                <form action="">
                    <div className="input-field">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            data-error={this.state.usernameError}
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

                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>Sign up</button>
                </form>
            </div>
        )
    }
}

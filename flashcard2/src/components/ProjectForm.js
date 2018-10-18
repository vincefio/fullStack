import React, { Component } from 'react'
import AddFlashCard from './AddFlashCard'

export default class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCards: [],
            projectName: '',
            projectError: '',
            addError: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addCardHandler = this.addCardHandler.bind(this)
    }

    addCardHandler(data) {
        console.log('add card handler ' + data)
    }

    handleSubmit(event) {
        event.preventDefault()

        const err = this.validate()

        if (err) {
            console.log('error subitting form')
        }

        if (!err) {
            console.log('NO ERROR!')
            /* axios.post('/newDocument', {
                 projectName: this.state.projectName,
                 projects: this.state.currentCards
             })
                 .then(function (response) {
                     console.log('response ' + response.data)
                 })
                 .catch(function (error) {
                     console.log(error)
                 })*/
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let isError = false;
        const errors = {
            projectError: ''
        }

        if (this.state.projectName.length < 1) {
            isError = true;
            errors.nameError = 'You must choose a title for your project'

            this.setState({
                ...this.state,
                addError: true,
                ...errors
                // errors: { ...errors }
            })
        }

        /* if (this.state.currentCards.length < 1) {
             isError = true;
             errors.projectError = 'You havent added any cards to your project'
 
             this.setState({
                 ...this.state,
                 addError: true,
                 ...errors
                 // errors: { ...errors }
             })
         }*/


        return isError;
    }

    render() {
        let frontError = this.state.nameError
        //let cardsAdded = this.state.currentCards.length

        const nameErrorOptions = <div className="errorMessage">{frontError}</div>


        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    {nameErrorOptions}
                    <label>
                        Name:
                    <input onChange={this.handleChange} type="text" name="projectName" />
                    </label>
                    <AddFlashCard handler={this.addCardHandler} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

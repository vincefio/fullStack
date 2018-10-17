import React, { Component } from 'react'
import axios from 'axios'
import { Button, Icon, Modal } from 'react-materialize'


export default class CreateProject extends Component {
    //create state for adding flashcards
    constructor(props) {
        super(props);
        this.state = {
            currentCards: [],
            projectName: '',
            textAreaFront: '',
            frontError: '',
            textAreaBack: '',
            backError: '',
            addError: true
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('button clicked')
        //console.log('event ' + event.target.name.value)

        const err = this.validateForm()

        if (err) {
            console.log('error')
        }

        if (!err) {
            console.log('no error')
            axios.post('/newDocument', {
                projectName: event.target.name.value
            })
                .then(function (response) {
                    console.log('response ' + response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    }

    validateForm = () => {
        let isError = false;
        const errors = {
            nameError: '',
            projectError: ''
        }

        if (this.state.projectName.length < 1) {
            isError = true;
            errors.nameError = 'You must choose a title for your project'
        }

        if (this.state.currentCards.length < 1) {
            isError = true;
            errors.projectError = 'You havent added any cards to your project'
        }

        this.setState({
            ...this.state,
            addError: true,
            ...errors
            // errors: { ...errors }
        })

        return isError;
    }

    validate = () => {
        let isError = false;
        const errors = {
            frontError: '',
            backError: ''
        }

        //add form validation
        if (this.state.textAreaFront.length < 1) {
            isError = true
            errors.frontError = 'Must have input'
            //this.state.addError = true;
        }

        if (this.state.textAreaBack.length < 1) {
            isError = true
            errors.backError = 'Must have input'
            //this.state.addError = true;
        }

        this.setState({
            ...this.state,
            addError: true,
            ...errors
            // errors: { ...errors }
        })

        return isError;
    }

    handleChange(event) {
        // console.log(this.state)

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleAdd(event) {
        event.preventDefault()

        const err = this.validate()

        //if no errors add the current cards part of db
        if (!err) {
            let currentCard = {}
            currentCard.front = this.state.textAreaFront
            currentCard.back = this.state.textAreaBack

            let currentCards = this.state.currentCards.push(currentCard)

            this.setState({
                ...this.state,
                textAreaFront: '',
                textAreaBack: '',
                frontError: '',
                backError: '',
                addError: false,
                ...currentCards
            })

        }
    }

    render() {
        let frontError = this.state.frontError
        let backError = this.state.backError
        let addSuccess = <div></div>
        let nameError = this.state.nameError
        let projectError = this.state.projectError

        const nameErrorOptions = <div className="errorMessage">{nameError}</div>
        const projectErrorOptions = <div className="errorMessage">{projectError}</div>

        const frontErrorOptions = <div className="errorMessage">{frontError}</div>
        const backErrorOptions = <div className="errorMessage">{backError}</div>

        if (!this.state.addError) {
            addSuccess = <div>{'card has been added!'}</div>
        }

        //loop through current cards in state and tell how many cards have been added
        const cardsAdded = this.state.currentCards.length

        return (

            <div>
                <form id="createProjectForm" onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                        <input onChange={this.handleChange} type="text" name="projectName" />
                    </label>

                    <Modal

                        trigger={<Button className="amber"><i className="fas fa-plus"></i>Add FlashCard</Button>}>
                        <div className="row">
                            <form onSubmit={this.handleAdd} id="addCardForm">
                                <div className="input-field col s6">
                                    {frontErrorOptions}
                                    <h4>Front:</h4>
                                    <textarea value={this.state.textAreaFront} onChange={this.handleChange} name="textAreaFront" id="textarea1" className="materialize-textarea validate"></textarea>
                                </div>
                                <div className="input-field col s6">
                                    {backErrorOptions}
                                    <h4>Back:</h4>
                                    <textarea value={this.state.textAreaBack} onChange={this.handleChange} name="textAreaBack" id="textarea2" className="materialize-textarea validate"></textarea>
                                </div>
                                <div>{cardsAdded} cards added</div>
                                {addSuccess}

                                <input className="btn waves-effect waves-light submitButton" type="submit" value="Submit" />
                            </form>
                        </div>

                    </Modal>
                    <br />
                    <div>{cardsAdded} cards added</div>

                    <br />
                    <input className="btn waves-effect waves-light submitButton" type="submit" value="Submit Project" />
                </form>




            </div>
        )
    }
}

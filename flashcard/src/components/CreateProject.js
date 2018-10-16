import React, { Component } from 'react'
import axios from 'axios'
import { Button, Icon, Modal } from 'react-materialize'


export default class CreateProject extends Component {
    //create state for adding flashcards
    constructor(props) {
        super(props);
        this.state = {
            currentCards: [],
            textAreaFront: '',
            frontError: '',
            textAreaBack: '',
            backError: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('button clicked')
        //console.log(event.target)
        //console.log('event ' + event.target.name.value)

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
        }

        if (this.state.textAreaBack.length < 1) {
            isError = true
            errors.backError = 'Must have input'
        }

        this.setState({
            ...this.state,
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

        console.log(err)
    }

    render() {
        let frontError = this.state.frontError
        let backError = this.state.backError


        const frontErrorOptions = <div className="errorMessage">{frontError}</div>



        const backErrorOptions = <div className="errorMessage">{backError}</div>

        return (

            <div>
                <form id="createProjectForm" onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                        <input type="text" name="name" />
                    </label>

                    <Modal

                        trigger={<Button><i className="fas fa-plus"></i>Add FlashCard</Button>}>
                        <div className="row">
                            <form onSubmit={this.handleAdd} id="addCardForm">
                                <div className="input-field col s6">
                                    {frontErrorOptions}
                                    <h4>Front:</h4>
                                    <textarea onChange={this.handleChange} name="textAreaFront" id="textarea1" className="materialize-textarea validate"></textarea>
                                </div>
                                <div className="input-field col s6">
                                    {backErrorOptions}
                                    <h4>Back:</h4>
                                    <textarea onChange={this.handleChange} name="textAreaBack" id="textarea2" className="materialize-textarea validate"></textarea>
                                </div>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>

                    </Modal>
                    <br />

                    <input type="submit" value="Submit" />
                </form>




            </div>
        )
    }
}

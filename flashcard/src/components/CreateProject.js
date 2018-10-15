import React, { Component } from 'react'
import axios from 'axios'
import { Button, Icon, Modal } from 'react-materialize'


export default class CreateProject extends Component {
    //create state for adding flashcards
    constructor(props) {
        super(props);
        this.state = {
            currentCards: []
        };
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('button clicked')
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

    addCard() {
        console.log('click works')
    }

    render() {
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
                            <div className="input-field col s6">
                                <h4>Front:</h4>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                            <div className="input-field col s6">
                                <h4>Back:</h4>
                                <textarea id="textarea2" className="materialize-textarea"></textarea>
                            </div>
                        </div>
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addCard}><i className="material-icons">add</i></a>
                    </Modal>
                    <br />

                    <input type="submit" value="Submit" />
                </form>




            </div>
        )
    }
}

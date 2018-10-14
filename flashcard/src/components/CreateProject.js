import React, { Component } from 'react'
import axios from 'axios'
import { Button, Icon, Modal } from 'react-materialize'


export default class CreateProject extends Component {

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

    render() {
        return (
            <div>
                <form id="createProjectForm" onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                        <input type="text" name="name" />
                    </label>

                    <Modal
                        header='Modal Header'
                        trigger={<Button><i className="fas fa-plus"></i>Add FlashCard</Button>}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </Modal>
                    <br />

                    <input type="submit" value="Submit" />
                </form>




            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
export default class CreateProject extends Component {

    handleSubmit(event) {
        event.preventDefault()
        console.log('button clicked')
        //console.log('event ' + event.target)

        axios.post('/newDocument', {
            // projectName: event.target.name
            projectName: 'Vince Project'
        })
            .then(function (response) {
                console.log('response ' + JSON.stringify(response.data))
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
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

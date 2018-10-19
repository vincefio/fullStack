import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-materialize'

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projectResults: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        // let results;
        console.log('component will mount')
        axios.get('/projects')
            .then((response) => {
                console.log(response.data)
                let results = response.data

                //set state to database results
                this.setState({
                    projectResults: results
                })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    onDeleteClick(id) {
        console.log('id ' + id)
    }

    render() {
        //use a map function to render DOM elements from db/state

        var projectList = this.state.projectResults.map((project) => {

            return (
                <div key={project._id}>
                    <div className="projectListItem">{project.projectName}</div>
                    <Button onClick={this.onDeleteClick.bind(this, project._id)} waves='light'>button</Button>
                </div>
            )
        })

        return (
            <div>
                <h1>Projects</h1>
                {projectList}
            </div>
        )
    }
}

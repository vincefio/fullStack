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
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        // let results;
        //console.log('component will mount')
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
        // console.log('id ' + id)
        console.log('project delete in process')

        axios.delete('/delete/' + id)
            .then((response) => {
                //reset state
                let newProjectResults = this.state.projectResults
                    .filter(project => project._id != id)

                this.setState({
                    projectResults: newProjectResults
                })
                //console.log(response)
            })
            .catch(err => console.log(err))
    }

    render() {
        //use a map function to render DOM elements from db/state

        var projectList = this.state.projectResults.map((project) => {

            return (
                <div className='projectDiv valign-wrapper' key={project._id}>
                    <Button className="project-delete right red" onClick={this.onDeleteClick.bind(this, project._id)} waves=''><i class="material-icons">clear</i></Button>
                    <div className="projectListTitle">{project.projectName}</div>
                    <Button className='study-button'>Study</Button>
                </div>
            )
        })

        return (
            <div className='container'>
                <h1>Projects</h1>
                {projectList}
            </div>
        )
    }
}

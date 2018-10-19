import React, { Component } from 'react'
import axios from 'axios'

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

                this.setState({
                    projectResults: results
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        //set state to database results

    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
            </div>
        )
    }
}

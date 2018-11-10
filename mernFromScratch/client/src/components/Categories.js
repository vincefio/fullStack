import React, { Component } from 'react'
import axios from 'axios'

export default class Categories extends Component {
    constructor() {
        super()
        this.state = ({
            categories: []
        })
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        //request category info from db

        //save reference to this to set state inside axios call
        let self = this

        axios.get('/categories')
            .then(function (response) {
                console.log(response.data);
                self.setState({
                    categories: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h4>categories</h4>
            </div>
        )
    }
}

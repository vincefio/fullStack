import React, { Component } from 'react'
import axios from 'axios'

export default class Categories extends Component {
    componentDidMount() {
        //request category info from db
        axios.get('/categories')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>categories</h1>
            </div>
        )
    }
}

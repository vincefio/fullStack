import React, { Component } from 'react'
import axios from 'axios'

export default class Flashcard extends Component {
    /*constructor(props) {
        this.super(props);

    }*/

    componentDidMount() {
        //create a post request to get data from mongo
        axios.post('/displayCard', {
            id: this.props.id
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>flashcard component</h1>
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    componentDidMount() {
        console.log('MOUNTINGGGGG')

        fetch('/products')
            .then(function (response) {
                return response.json();

            })
            .then(function (myJson) {
                console.log('yo ' + JSON.stringify(myJson));
            });

    }

    render() {
        return (
            <div >
                <h3>Hello {this.props.user}</h3>
                <div className="divider"></div>
                <h3>Products</h3>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class DisplayStocks extends Component {
    constructor() {
        super()
        this.state = {
            randomStocks: []
        }
    }

    //display 50 random stocks
    componentDidMount() {
        var randArr = []
        var newArr = []

        axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
            .then(function (response) {
                console.log(response);
                //generate 50 random numbers, put in array
                for (var i = 0; i < 50; i++) {
                    var randNum = Math.floor(Math.random() * response.data.length)
                    randArr.push(response.data[randNum])
                }
                //console.log(randArr)
            })
            .then(response => {
                this.setState({
                    randomStocks: randArr
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

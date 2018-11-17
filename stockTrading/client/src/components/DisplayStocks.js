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

        axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
            .then((response) => {
                console.log(response);
                //generate 50 random numbers, put in array
                for (var i = 0; i < 50; i++) {
                    var randNum = Math.floor(Math.random() * response.data.length)
                    randArr.push(response.data[randNum])
                }
                //console.log(randArr)
                this.setState({
                    randomStocks: randArr
                })
            })
            .then(response => {

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        //map out the state to render paragraphs for each random stock object

        return (
            <div className="container">
                <h2>50 Random Stocks</h2>
                <p className="instructionText">Some stocks to help you get started. Click the stock to add to your cart</p>
                <div className='randomDisplay'>

                    {this.state.randomStocks.map(stock => {
                        return <p key={stock.iexId}>{`${stock.symbol}: ${stock.name}`}</p>
                    })}
                </div>
            </div>

        )
    }
}

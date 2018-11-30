import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchStocks } from '../actions/postActions'


class DisplayStocks extends Component {
    constructor(props) {
        super(props)
        /*this.state = {
            randomStocks: []
        }*/

        this.handleClick = this.handleClick.bind(this)
    }

    //display 50 random stocks
    componentWillMount() {
        this.props.fetchStocks()
        /*var randArr = []

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
            });*/
    }

    handleClick(symbol, id, event) {
        event.preventDefault()
        //console.log(`clicked ${name}`)
        axios.post('/newStock', {
            name: symbol,
            id: id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        //map out the state to render paragraphs for each random stock object
        /*if (this.props.stocks.data) {
            const stockItems = this.props.stocks.data.map(stock => {
                return <a key={stock.iexId} onClick={this.handleClick.bind(this, stock.symbol, stock.iexId)} href="#"><p >{`${stock.symbol}: ${stock.name}`}</p></a>
            })
        }*/

        console.log('render ' + JSON.stringify(this.props.stocks))

        return (
            <div className="container">
                <h2>50 Random Stocks</h2>
                <p className="instructionText">Some stocks to help you get started. Click the stock to add to your cart</p>
                <div className='randomDisplay'>

                    {/*stockItems*/}
                </div>
                <div className="instructionText">For all accepted symbols click <a href="https://api.iextrading.com/1.0/ref-data/symbols" target="_blank">here</a></div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks.stocks
})

export default connect(mapStateToProps, { fetchStocks })(DisplayStocks)

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deleteStock } from '../actions/displayAction'
import store from '../store.js'
import { fetchStocks, addStock, getMyStocks } from '../actions/postActions'

class MyStocks extends Component {
    constructor(props) {
        super(props)
        /*this.state = {
            mystocks: []
        }*/

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        console.log(`component did mount`)
        console.log(this.props.thoseStocks)
        console.log(this.props.myStocks)
        console.log(store.getState())
        this.props.getMyStocks()
        //this.props.getMyStocks()
    }

    onDeleteClick(id) {
        this.props.deleteStock(id)
    }

    render() {
        console.log(`render ${JSON.stringify(this.props.myStocks)}`)
        if (this.props.myStocks.length > 0) {
            console.log(`if statement ${JSON.stringify(this.props.myStocks)}`)
            var stockList = this.props.myStocks.map((stock) => {

                return (
                    <div className='projectDiv valign-wrapper' key={stock._id}>
                        <div className="projectListTitle">{stock.name}</div>
                        <a className="btn project-delete right red" onClick={this.onDeleteClick.bind(this, stock._id)}><i className="material-icons">clear</i></a>

                    </div>
                )
            })
        }

        return (
            <div className="container">
                <h1>my stocks</h1>
                <p className="instructionText">Stocks I'm interested in.  Click to delete</p>
                {stockList}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //take state, and send it into component as 'props'
    /* myStocks: state.myStocks.myStocks,
     thoseStocks: state.stocks.myStocks,
     stocks: state.stocks.stocks*/
    stocks: state.stocks.stocks,
    myStocks: state.stocks.myStocks
})

export default connect(mapStateToProps, { deleteStock, getMyStocks })(MyStocks)

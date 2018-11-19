import React, { Component } from 'react'
import axios from 'axios'

export default class MyStocks extends Component {
    constructor() {
        super()
        this.state = {
            mystocks: []
        }

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        var self = this

        axios.get('/myStocks')
            .then(function (response) {
                //console.log(response);

                self.setState({
                    mystocks: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onDeleteClick(id) {
        //console.log(`delete ${id}`)
        var self = this
        axios.delete(`/delete/${id}`)
            .then(function (response) {
                console.log(response);

                let newStockResults = self.state.mystocks
                    .filter(stock => stock._id !== id)

                self.setState({
                    mystocks: newStockResults
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var stockList = this.state.mystocks.map((stock) => {

            return (
                <div className='projectDiv valign-wrapper' key={stock._id}>
                    <div className="projectListTitle">{stock.name}</div>
                    <a className="btn project-delete right red" onClick={this.onDeleteClick.bind(this, stock._id)}><i className="material-icons">clear</i></a>

                </div>
            )
        })
        return (
            <div className="container">
                <h1>my stocks</h1>
                <p className="instructionText">Stocks I'm interested in.  Click to delete</p>
                {stockList}
            </div>
        )
    }
}

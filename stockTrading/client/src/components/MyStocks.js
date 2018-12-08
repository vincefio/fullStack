import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getMyStocks } from '../actions/displayAction'

class MyStocks extends Component {
    constructor(props) {
        super(props)
        /*this.state = {
            mystocks: []
        }*/

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        this.props.getMyStocks()
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
        /* if (this.props.myStocks.myStocks !== 'undefined') {
             console.log(`if statement ${JSON.stringify(this.props.myStocks.myStocks)}`)
             var stockList = this.props.mystocks.myStocks.map((stock) => {
 
                 return (
                     <div className='projectDiv valign-wrapper' key={stock._id}>
                         <div className="projectListTitle">{stock.name}</div>
                         <a className="btn project-delete right red" onClick={this.onDeleteClick.bind(this, stock._id)}><i className="material-icons">clear</i></a>
 
                     </div>
                 )
             })
         }*/

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
    myStocks: state.myStocks.myStocks

})

export default connect(mapStateToProps, { getMyStocks })(MyStocks)

import React, { Component } from 'react'
import DisplayStocks from './DisplayStocks'
import AddStock from './AddStock'

export default class Home extends Component {
    render() {
        return (
            <div>

                <DisplayStocks />
            </div>
        )
    }
}

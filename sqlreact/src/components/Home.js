import React, { Component } from 'react'

export default class Home extends Component {
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

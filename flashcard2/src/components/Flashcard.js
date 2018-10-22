import React, { Component } from 'react'

export default class Flashcard extends Component {
    render() {
        return (
            <div>
                <h1>flashcard component</h1>
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}

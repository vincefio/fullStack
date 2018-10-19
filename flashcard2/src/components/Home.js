import React, { Component } from 'react'
import { Button } from 'react-materialize'

export default class Home extends Component {
    render() {
        return (
            <div className='App-header'>
                <h1 id="header-text">OMG itsssss...</h1>
                <div className="header-container">
                    <h2 id="header-text2">FlashCard!</h2>
                </div>
                <div className="button-container">
                    <Button className='button btn-large red' waves='light'>Study</Button>
                    <Button className='button btn-large' waves='light'>Create New</Button>
                </div>
            </div>
        )
    }
}

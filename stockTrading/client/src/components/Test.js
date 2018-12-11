import React, { Component } from 'react'
import store from '../store.js'

export default class Test extends Component {
    componentDidMount() {
        //setTimeout(function () { console.log(`Home ${JSON.stringify(store.getState())}`) }, 3000);
        //console.log(`Home ${JSON.stringify(store.getState())}`)
    }
    render() {
        return (
            <div>
                <h1>test component</h1>
            </div>
        )
    }
}

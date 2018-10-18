import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">FlashCard</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                            <li><a href="/">Home</a></li>
                            <li><a href="/addproject">New Project</a></li>
                            <li><a href="#">Study</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

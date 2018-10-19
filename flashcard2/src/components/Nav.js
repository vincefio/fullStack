import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='blue'>
                    <div className="nav-wrapper">
                        <a href="#" className="logo">FlashCard</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/addproject">New Project</Link></li>
                            <li><Link to="/projects">Study</Link></li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

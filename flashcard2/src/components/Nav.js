import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">FlashCard</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Study</a></li>
                            <li><a href="#"></a>Projects</li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Navbar, NavItem, Link } from 'react-materialize'
import M from 'materialize-css'

export default class Navigation extends Component {
    componentWillMount() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 })
    }

    render() {
        return (

            <div>
                <nav>
                    <div className="nav-wrapper  blue-grey darken-2">
                        <a href="#" className="brand-logo">Logo</a>
                        <a className='dropdown-trigger hide-on-large-only' href='#' data-target='dropdown1'><i className='material-icons'>dehaze</i></a>
                        <ul id="nav-mobile" className="right ">

                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>


                        </ul>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

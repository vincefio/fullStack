import React, { Component } from 'react'
import M from 'materialize-css'

export default class Nav extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    }

    render() {
        return (
            <div>
                <nav className='blue'>
                    <div className="nav-wrapper">
                        <a className="logo">Stock Tip</a>
                        <ul id="nav-mobile" className="right ">

                            <li className="hide-on-med-and-down"><a href="/stocks">My Stocks</a></li>
                            <li className="hide-on-med-and-down"><a href="badges.html">Components</a></li>

                            <li><a className="dropdown-trigger hide-on-large-only" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">dehaze</i></a></li>


                        </ul>

                        <ul id="dropdown1" className="dropdown-content">
                            <li><a href="#!">one</a></li>
                            <li><a href="#!">two</a></li>
                            <li className="divider"></li>
                            <li><a href="#!">three</a></li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

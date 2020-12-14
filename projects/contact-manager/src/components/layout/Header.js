import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className='container'>
                    <a href="/" className="navbar-brand">
                        Contact Manager
                    </a>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fa fa-home"></i>  Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add/contact" className="nav-link">
                                    <i className="fa fa-plus"></i> Add
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    <i className="fa fa-question"></i> About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
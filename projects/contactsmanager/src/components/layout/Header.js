import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-danger navbar-dark py-0 mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">Contact Manager</Link>
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fa-fa-home"></i> Home
                                   </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <i className="fa fa-question"></i> about
                                   </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                                <i className="fa fa-plus"></i> Add
                                   </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

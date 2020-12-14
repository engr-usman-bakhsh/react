import React, { Component } from 'react'
import { Consumer } from '../Context'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    state = {
        showContactDetails: false
    }
    onShowClick = () => {
        this.setState({ showContactDetails: !this.state.showContactDetails })
    }

    onDeleteClick = async (dispatch, id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({
                type: "DELETE_CONTACT",
                payload: id
            })
        }
        catch (e) {
            dispatch({
                type: "DELETE_CONTACT",
                payload: id
            })
        }
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactDetails } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <h3 className="card-header">
                                {name} {" "}
                                <i
                                    className="fa fa-sort-down"
                                    style={{ cursor: "Pointer", color: "red" }}
                                    onClick={this.onShowClick}
                                > </i>
                                <i
                                    className="fa fa-times"
                                    style={{ cursor: "pointer", color: 'red', float: 'right', fontWeight: "bolder" }}
                                    onClick={this.onDeleteClick.bind(this, dispatch, id)}
                                ></i>
                                <Link to={`/contact/edit/${id}`}>
                                    <i
                                        className="fa fa-pencil"
                                        style={{ color: "black", float: 'right', marginRight: '1rem', cursor: 'pointer' }}
                                    ></i>
                                </Link>
                            </h3>
                            { showContactDetails ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}</li>
                                    <li className="list-group-item">
                                        phone: {phone}
                                    </li>
                                </ul>
                            ) :
                                null
                            }

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

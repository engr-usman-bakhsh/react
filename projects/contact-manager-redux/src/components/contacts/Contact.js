import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showContactDetail: false
    }


    onDeleteClick = async (id) => {

    }


    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactDetail } = this.state;
        return (
            <div className='card card-body mb-3'>

                <h1 className="card-heading h3">
                    {name} {" "}
                    <i className="fa fa-sort-down" style={{ cursor: "pointer" }}
                        onClick={() => this.setState({
                            showContactDetail: !this.state.showContactDetail
                        })}
                    >
                    </i>
                    <i className="fa fa-times" style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                        onClick={this.onDeleteClick.bind(this, id)}
                    ></i>
                    <Link to={`/edit/contact/${id}`}>
                        <i
                            className="fa fa-pencil"
                            style={{
                                cursor: "pointer",
                                color: "black",
                                float: "right",
                                marginRight: "1rem"
                            }}

                        ></i>
                    </Link>

                </h1>
                {showContactDetail ?
                    (
                        <ul className="list-group">
                            <li className="list-group-item">
                                phone: {phone}
                            </li>
                            <li className="list-group-item">
                                email: {email}
                            </li>
                        </ul>
                    )
                    : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
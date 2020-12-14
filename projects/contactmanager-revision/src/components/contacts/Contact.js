import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

class Contact extends Component {
    state = {
        showContactDetail: false
    }
    onClickShowEvent = () => {
        this.setState({ showContactDetail: !this.state.showContactDetail })
    }
    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactDetail } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body">
                            <h3 className="card-heading">
                                {name} {"  "}
                                <i onClick={this.onClickShowEvent} className="fas fa-sort-down" style={{ cursor: 'pointer' }}>
                                </i>
                                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{ cursor: "pointer", color: 'red', float: 'right' }}></i>
                            </h3>
                            {showContactDetail ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null
                            }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}
export default Contact;
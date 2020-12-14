import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'


class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name === '') {
            this.setState({ errors: { name: "Name Is Required" } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: "Email Is Required" } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: "Phone Is Required" } });
            return;
        }
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact })
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        value={name}
                                        placeholder="Enter Name ..."
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="Enter Email..."
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter Phone ..."
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Submit" className="btn btn-block btn-dark" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;
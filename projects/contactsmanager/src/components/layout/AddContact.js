import React, { Component } from 'react'
import { Consumer } from '../Context'
import TextInputGroup from './TextInputGroup'
import axios from 'axios'


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
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name === "") {
            this.setState({ errors: { name: "Name is Required" } });
            return;
        }
        if (email === "") {
            this.setState({ errors: { email: "Email is Required" } });
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: "Phone is Required" } });
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }

        const res = await axios.post("https://jsonplaceholder.typicode.com/users", newContact)

        dispatch({
            type: "ADD_CONTACT",
            payload: res.data
        })

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/')

    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <h3 className="card-header">
                                Add Contact
                            </h3>
                            <form className='card-body' onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <input type="submit" value="Submit" className="btn btn-dark btn-block" />
                            </form>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;

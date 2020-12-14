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

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
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

        const { id } = this.props.match.params;

        const updateContact = {
            name,
            email,
            phone
        };
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)

        dispatch({
            type: "UPDATE_CONTACT",
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
                                Edit Contact
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

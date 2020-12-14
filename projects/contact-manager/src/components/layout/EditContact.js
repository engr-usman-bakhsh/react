import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from './TextInputGroup'
// import uuid from 'uuid'
import axios from 'axios'

class AddForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
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
    };
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({ errors: { name: "Name is Required" } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: "Email is Required" } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: "phone is Required" } });
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
        });
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
                            <h1 className="card-header h2">Edit Contact</h1>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(this, dispatch)}>
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

                                    <input type="submit"
                                        className="btn btn-dark btn-block py-2"
                                        value="Submit"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddForm;
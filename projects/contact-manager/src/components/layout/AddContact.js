import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from './TextInputGroup'
// import uuid from 'uuid'
import axios from 'axios'

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

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
        const newContact = {
            // id: uuid(), we dont need uuid because most of the websites have increment operatio on comming data. so here the next post will have id===11
            name,
            email,
            phone
        }
        // axios.post("https://jsonplaceholder.typicode.com/users", newContact)
        //     .then(res =>
        //         dispatch({
        //             type: 'ADD_CONTACT',
        //             payload: res.data
        //         })
        //     )
        const res = await axios.post("https://jsonplaceholder.typicode.com/users", newContact)
        dispatch({
            type: 'ADD_CONTACT',
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
                            <h1 className="card-header h2">Add Contact</h1>
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

export default AddContact;
import React, { Component } from 'react'
import TextInputGroup from './TextInputGroup'

class AddForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit = (e) => {
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

        // const updateContact = {
        //     name,
        //     email,
        //     phone
        // }

        // const { id } = this.props.match.params;
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
            <div className="card mb-3">
                <h1 className="card-header h2">Edit Contact</h1>
                <div className="card-body">
                    <form
                        onSubmit={this.onSubmit}>
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
    }
}

export default AddForm;
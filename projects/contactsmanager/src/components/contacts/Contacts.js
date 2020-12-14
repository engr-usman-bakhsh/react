import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../Context'

export default class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <div>
                            <h1 className="display-4"><span className="text-danger">Contact</span> Manager</h1>
                            {contacts.map(contact =>
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            )}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

// rootreducer is actually a very small file. it is basically a meeting place for all of our reducers. when we have different resources than we have certain reducers for each one. like authentication reducer, error reducer, profile reducer, post reducer etc. here we'll have just contact reduce. more big applications will require more reducers.

import { combineReducers } from 'redux';
import contactReducer from './contactReducer'

export default combineReducers({
    contact: contactReducer
    // this contact name is really important because when we'll bring application state from redux to a component its going to be available in the props. then we would access the contact state by this.props.contact.
})
import React, { Component } from 'react'

class Test extends Component {
    state = {
        test: "test"
    }



    componentDidMount() {
        // this is the second most popular lifecycle.
        //  what is written here is fired off after the component mount
        console.log("componentDidMount...")
        // here we make our http request to an API or backend or fetching data from within of your component and putting it into your component state or where ever we call it.
    }
    componentWillMount() {
        console.log("componentWillMount...")
        // this runs before the componentDidMount
        // this is usually used in AJAX calls
    }
    componentDidUpdate() {
        console.log("componentDidUpdate...")
        // this only runs when a components is updated
        // updating means when a state is changed inside a component than it runs.
        // it runs when a component is updated
    }
    componentWillUpdate() {
        console.log("componentWillUpdate...")
        // it runs befor the componentDidUpdate as previous we have learnt
    }
    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceiveProps...")
        // this will run when a component receive a new property
        // this usually works with redux
        // lets we have an application state in redux and we pass it through map as a props to any component than it runs on every new props comming. 
        // the one bad thing is that the componentWillReceiveProps along with componentWillMount and componentWillUpdate is deprecated. for react 17 or latter version we have to use UNSAFE_componentWillReceiveProps.
        // this lifecycle method when used with redux it makes the things very easy.
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // you must have to return null or a state from it. otherwise error will be generated
        return null;
        // we cannot use this.setState() here to update a state
        // we can use following syntax to update the state
        // return{
        // test: "something"
        //}
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // this is fired before a mutation is made like before the DOM is updated.
        console.log("getSnapshotBeforeUpdate..")
    }



    render() {
        return (
            <div>
                <h1>This is a test component</h1>
            </div>
        )
    }
}

export default Test;
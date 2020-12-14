// here we'll  make our initial states and implement all the actions like searchUser, GetRequests etc,
// we'll make a Types.js file where all of our methods are initialized with the same name as string. this is mostly used in redux. if we're familiar with redux than to understand it is very easy;

import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS
} from '../types'


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    const searchUser = async (text) => {
        setLoading()

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }
    // Get User
    const getUser = async (username) => {
        setLoading()

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    // Get Repos
    const getUserRepos = async (username) => {
        setLoading(true)

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }
    // Clear Users
    const clearUsers = () => dispatch({
        type: CLEAR_USERS
    })
    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUsers,
            getUser,
            getUserRepos
        }}>
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;
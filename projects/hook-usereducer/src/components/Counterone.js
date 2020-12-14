import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function Counterone() {
    const [count, dispatch] = useReducer(reducer, initialState)
    // count is our state and dispatch is the method which will change our values

    return (
        <div>
            <div className='state'>Count - {count}</div>
            <button onClick={() => dispatch('INCREMENT')}>Incremnt</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counterone;
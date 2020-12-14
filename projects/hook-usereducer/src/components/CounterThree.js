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

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div className='state'>Count One  {count}</div>
            <button onClick={() => dispatch('INCREMENT')}>Incremnt</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
            <br />
            <div className='state'>Counter Two  {countTwo}</div>
            <button onClick={() => dispatchTwo('INCREMENT')}>Incremnt</button>
            <button onClick={() => dispatchTwo('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatchTwo('RESET')}>Reset</button>
        </div>
    )
}

export default CounterThree;
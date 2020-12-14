import React, { useReducer } from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'DECREMENT':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'INCREMENT2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'DECREMENT2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div className='state'>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>
                Incremnt 1
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>
                Decrement 1
            </button>

            <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>
                Incremnt 5
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}>
                Decrement 5
            </button>
            <div>
                <div className='state'>Counter 2 - {count.secondCounter}</div>
                <button onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}>
                    Incremnt C2
            </button>
                <button onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}>
                    Decrement C2
            </button>

            </div>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default CounterTwo;
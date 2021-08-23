import React, { useReducer } from 'react'
import style from './style';

const types = {
    INCREMENT_: "increment",
    DECREMENT_: "decrement",
    RESET_: "reset"
}

const reducer = (state, action) => {
    switch(action.type){
        case types.INCREMENT_:
            return state+1;
        case types.DECREMENT_:
            return state-1;
        case types.RESET_:
            return 0;
        default:
            return state
    }
}

function Count() {

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div style={style.component}>
            <h1>clicks: {count}</h1>

            <button style={style.button} onClick={()=> dispatch({ type: "increment"})}>
                increment
            </button>
            <button style={style.button} onClick={()=> dispatch({ type: "decrement"})}>
                decrement
            </button>
            <button style={style.button} onClick={()=> dispatch({ type: "reset"})}>
                reset
            </button>
        </div>
    )
}

export default Count

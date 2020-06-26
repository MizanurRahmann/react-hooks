import React, {useReducer} from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'Increament':
            return state + 1;
        case 'Decreament':
            return state - 1;
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer ,initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer ,initialState);
    
    return (
        <div>
            <div>
                <div>Count = {count}</div>
                <button onClick={() => dispatch('Increament')}>Increament</button>
                <button onClick={() => dispatch('Decreament')}>Decreament</button>
                <button onClick={() => dispatch('Reset')}>Reset</button> 
            </div>
            <div>
                <div>Count = {countTwo}</div>
                <button onClick={() => dispatchTwo('Increament')}>Increament</button>
                <button onClick={() => dispatchTwo('Decreament')}>Decreament</button>
                <button onClick={() => dispatchTwo('Reset')}>Reset</button> 
            </div>
        </div>
    )
}

export default CounterThree

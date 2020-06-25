import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch(action.type){
        case 'Increament':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'Decreament':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'Increament2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'Decreament2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer ,initialState)
    
    return (
        <div>
            <div>First Count = {count.firstCounter}</div>
            <div>Second Count = {count.secondCounter}</div>
            <br />
            <div>
                <button onClick={() => dispatch({type: 'Increament', value: 1})}>Increament +1</button>
                <button onClick={() => dispatch({type: 'Decreament', value: 1})}>Decreament -1</button>
                <button onClick={() => dispatch({type: 'Increament', value: 5})}>Increament +5</button>
                <button onClick={() => dispatch({type: 'Decreament', value: 5})}>Decreament -5</button>
            </div><br />
            <div>
                <button onClick={() => dispatch({type: 'Increament2', value: 1})}>Increament +1</button>
                <button onClick={() => dispatch({type: 'Decreament2', value: 1})}>Decreament -1</button>
                <button onClick={() => dispatch({type: 'Increament2', value: 5})}>Increament +5</button>
                <button onClick={() => dispatch({type: 'Decreament2', value: 5})}>Decreament -5</button>
            </div><br />
            <button onClick={() => dispatch({type: 'Reset'})}>Reset</button> 
        </div>
    )
}

export default CounterTwo

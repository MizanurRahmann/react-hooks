import React, {useState} from 'react'

function HookCounterTwo() {
    const initialState = 0;
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(previousValue => previousValue + 1)}>Increase +</button>
            <button onClick={() => setCount(previousValue => previousValue - 1)}>Decrease -</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    )
}

export default HookCounterTwo

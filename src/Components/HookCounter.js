import React, {useState} from 'react'

function HookCounter() {
    const [count, bubuCount] = useState(0);
    return (
        <div>
            <button onClick={() => bubuCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default HookCounter

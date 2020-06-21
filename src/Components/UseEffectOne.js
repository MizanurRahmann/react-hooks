import React, {useEffect, useState} from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
            //2nd argument is a array that include the variable in which useEffect depends on.
            console.log("Updating the js.")
            document.title = `You clicked ${count} times.`;
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectOne

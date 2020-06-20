import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstname: '', lastname: ''});

    return (
        <div>
            <input 
                type="text" 
                value={name.firstname}
                onChange={event => setName({...name, firstname: event.target.value})}
            />
            <input 
                type="text" 
                value={name.lastname}
                onChange={event => setName({...name, lastname: event.target.value})}
            />
            <h3>Your firstname is {name.firstname}</h3>
            <h3>Your lastname is {name.lastname}</h3>
        </div>
    )
}

export default HookCounterThree

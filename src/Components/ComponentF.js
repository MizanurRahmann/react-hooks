import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component -  F - {countContext.countState}
            <button onClick={() => countContext.countDispatch('Increament')}>Increament</button>
            <button onClick={() => countContext.countDispatch('Decreament')}>Decreament</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button> 
        </div>
    )
}

export default ComponentF

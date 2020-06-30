import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 200000000) i++; //Slow down...
        return counterOne % 2 === 0;
    }, [counterOne]);


    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even': 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter

/*We need to tell react not to calculate whether counterOne is odd or even
When we change counterTwo value. And here useMemo is usefull.*/
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';




function CounterHook() {
    let c=1
    const [Count, setCount] = useState(c)
    const CountPlusCal = () => {
        setCount(parseInt(Count + 1))
        console.log('Increment button Click')
    }
    const CountDecCal = () => {
        setCount(parseInt(Count - 1))
        console.log(' Decrement button Click')
    }

    return (
        <>
            <h1>{Count}</h1>

            <Button  variant="outline-primary" onClick={CountPlusCal} style={{margin:'3px'}}>Increment</Button>
            <Button  variant="outline-primary"  onClick={CountDecCal}>Decrement</Button>
        </>
    )
}

export default CounterHook

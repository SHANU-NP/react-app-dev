import React, { useState } from 'react';

function HookCounterTwo (){

    let initialValue = 0;
    const [count,setCount] = useState(initialValue)

    return(
        <div>
            <h1>Count : {count} </h1>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(prvCount => prvCount + 1)}>Increment</button>
            <button onClick={() => setCount(prvCountt => prvCountt - 1)}>Decrement</button>

        </div>
    )

}

export default HookCounterTwo;
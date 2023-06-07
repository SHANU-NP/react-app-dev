import React, { useState ,useEffect} from 'react';

function HookCounterOne(){

    const [count,setCount] = useState(0)
    //execute each time when render with new state
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return(

        <div>

        <button onClick={() => setCount(count + 1)}>count : {count}</button>


        </div>
    )
}

export default HookCounterOne
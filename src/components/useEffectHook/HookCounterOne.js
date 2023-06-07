import React, { useState ,useEffect} from 'react';

function HookCounterOne(){

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    //execute each time when render with new state
    useEffect(() => {
        document.title = `you clicked ${count} times`
        console.log("document title updated")
    },[count])

    return(

        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>count : {count} times</button>
        </div>
    )
}

export default HookCounterOne
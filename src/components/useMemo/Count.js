import React,{useState,useMemo} from 'react'

function Count() {
    const [counterOne , setCounterOne] = useState(0)
    const [ counterTwo , setCounterTwo] = useState(0)


const incrementCounterOne = () => {
    setCounterOne(counterOne + 1)
}

const incrementCounterTwo = () =>  {
    setCounterTwo(counterTwo + 1)
}

const isEven = useMemo(() =>  {
    let i = 0 
    while(i < 200000000) i ++
    return (counterOne % 2) === 0;
},[counterOne])

  return (
    <div>
        <button onClick={incrementCounterOne}>Count one - {counterOne}</button>
        <button onClick={incrementCounterTwo}>Count two - {counterTwo}</button>
        <span>{isEven ? 'even' : 'odd'}</span>
    </div>
  )
}

export default Count
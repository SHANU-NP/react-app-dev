import React, { useState, useEffect } from 'react';

function HookMouse(){
     const [x , setX] = useState(0)
     const [y,setY] = useState(0)

     useEffect( () => {
        console.log("useEffect triggered ")
        document.addEventListener("mousemove",mouseMoveHandler)
    },[])

    const mouseMoveHandler = e => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }


    return(
        <div>
            X pos : {x} 
            Y  Pos : {y} 
        </div>
    )
}

export default HookMouse;
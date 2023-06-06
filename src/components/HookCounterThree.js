import React, { useState } from 'react';

function HookCounterThree(){
    const [name,setName] = useState({firstName : '',lastName : ''})

 
    return(
        <div>
            <form>
             
            <h1>first name is : {name.firstName}</h1>
            <h1>last name is : {name.lastName}</h1>

            <input type='text' value={name.firstName} onChange={e => setName({ ...name ,firstName : e.target.value})}></input>
            <br>
            </br>
            <input type='text' value={name.lastName} onChange={e => setName({...name , lastName : e.target.value})}></input>

            </form>

        </div>
    )

}

export default HookCounterThree;
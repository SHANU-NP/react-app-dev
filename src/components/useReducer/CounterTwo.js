import React , {useReducer} from "react";

const initialValue = {
    firstCounter : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {firstCounter : state.firstCounter + action.count}
        case 'decrement':
            return {firstCounter : state.firstCounter - action.count}
        case 'reset':
            return initialValue;
        default :
            return state;             
    }

}

function CounterTwo(){

   const [state,dispatch] = useReducer(reducer,initialValue)

return(
    <div>
        Count : {state.firstCounter}
        <button onClick={() => dispatch({type : 'increment',count : 5 })}>increment</button>
        <button onClick={() => dispatch({type : 'decrement',count : 1})}>decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>reset</button>
        
    </div>
)
}
export default CounterTwo
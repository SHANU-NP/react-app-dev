import "./App.css";
import React, { useReducer } from "react";
import "./components/userReducerWithUseContext/ComponentA";
import ComponentA from "./components/userReducerWithUseContext/ComponentA";
import ComponentB from "./components/userReducerWithUseContext/ComponentB";
import ComponentC from "./components/userReducerWithUseContext/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state}
      <CountContext.Provider value={{countState : state , countDispatch : dispatch}}>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </CountContext.Provider>
    </div>
  );
}

export default App;

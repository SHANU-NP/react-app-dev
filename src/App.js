import "./App.css";
import React from "react";
import CounterTwo from "./components/useReducer/CounterTwo";


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo></CounterTwo>
    </div>
  );
}

export default App;

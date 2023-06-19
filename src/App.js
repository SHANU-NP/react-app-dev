import "./App.css";
import React from "react";
import CounterOne from "./components/useReducer/CounterOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterOne></CounterOne>
    </div>
  );
}

export default App;

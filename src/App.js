import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Welcome  from "./components/Welocme";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">

        {/* <FunctionClick></FunctionClick>
        <br/>
        <ClassClick></ClassClick> */}

        <EventBind></EventBind>

      
    </div>
  );
}

export default App;

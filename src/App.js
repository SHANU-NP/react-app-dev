import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Welcome  from "./components/Welocme";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"

function App() {
  return (
    <div className="App">

        <FunctionClick></FunctionClick>
        <br/>
        <ClassClick></ClassClick>

      
    </div>
  );
}

export default App;

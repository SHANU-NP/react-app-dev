import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Welcome from "./components/Welocme";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/Parent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
import StayleSheets from "./components/StayleSheets";
import Inine from "./components/Inine";
import Form from "./components/Form";
import FragmentDemo from './components/FragmentDemo'
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">

      <ParentComp></ParentComp>

    </div>
  );
}

export default App;

import ComponentC from "./components/context/ComponentC";
import { UserProvider } from "./components/context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value={{name : "shanu",age : "20"}}>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

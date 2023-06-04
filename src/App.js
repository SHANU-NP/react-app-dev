import ComponentC from "./components/context/ComponentC";
import { UserProvider } from "./components/context/userContext";
import PostList from "./components/http/PostList";

function App() {
  return (
    <div>
      <PostList></PostList>
    </div>
  );
}

export default App;

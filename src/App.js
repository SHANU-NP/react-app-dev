
import './App.css';
import DataFetching from './components/useEffectHook/DataFetching';
import FetchWithButton from './components/useEffectHook/FetchWithButtonClick';


function App() {
  return (
    <div className="App">
      {/* <DataFetching></DataFetching> */}
      <FetchWithButton></FetchWithButton>
    </div>
  );
}

export default App;

import ClickCounter from "./components/renderPropsPattern/ClickCounter";
import Counter from "./components/renderPropsPattern/Counter";
import HoverCounter from "./components/renderPropsPattern/HoverCounter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => {
          return (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter>
          );
        }}
      />

      <Counter
        render={(count, incrementCount) => {
          return (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter>
          );
        }}
      ></Counter>
    </div>
  );
}

export default App;

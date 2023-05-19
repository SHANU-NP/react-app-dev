import ErrorBoundry from "./components/errorHandling/ErrorBoundry";
import Hero from "./components/errorHandling/Hero";

function App() {
  return (
    <div className="App">

      <ErrorBoundry>
      <Hero heroName="BatMan"></Hero>
      <Hero heroName="SuperMan"></Hero>
      <Hero heroName="joker"></Hero>
      </ErrorBoundry>

    </div>
  );
}

export default App;

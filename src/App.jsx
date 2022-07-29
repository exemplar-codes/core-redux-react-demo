import CounterWithHook2 from "./components/CounterWithHook2";
import CounterWithExplicitReRender1 from "./components/CounterWithExplicitReRender1";

function App() {
  return (
    <>
      <h2>{"CounterWithExplicitReRender1"}</h2>
      <CounterWithExplicitReRender1 />
      <br />
      <h2>{"CounterWithHook2"}</h2>
      <CounterWithHook2 />
    </>
  );
}

export default App;

import storeUITree from "../../store/storeUITree";
import { treeDispatch } from "./CounterRoot";

function Counter2() {
  const { count } = storeUITree.getState();

  const incrementHandler = () => treeDispatch({ type: "+" });
  const decrementHandler = () => treeDispatch({ type: "-" });

  return (
    <>
      <h3>Counter 2</h3>
      <button onClick={decrementHandler}>-</button> &nbsp;
      {count}
      &nbsp;
      <button onClick={incrementHandler}>+</button>
    </>
  );
}

export default Counter2;

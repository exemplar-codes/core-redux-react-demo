import storeUITree from "../../store/storeUITree";
import { treeDispatch } from "./CounterRoot";

function Counter1() {
  const { count } = storeUITree.getState();

  const incrementHandler = () => treeDispatch({ type: "+" });
  const decrementHandler = () => treeDispatch({ type: "-" });

  return (
    <>
      <h3>Counter 1</h3>
      <button onClick={decrementHandler}>-</button> &nbsp;
      {count}
      &nbsp;
      <button onClick={incrementHandler}>+</button>
    </>
  );
}

export default Counter1;

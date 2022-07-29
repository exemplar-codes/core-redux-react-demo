import storeUITree from "../../store/storeUITree";
import { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

let treeDispatch;

function CounterRoot() {
  const [, _] = useState();
  const rerender = () => _({});

  treeDispatch = (action) => storeUITree.dispatch({ ...action, rerender });

  const { count } = storeUITree.getState();

  const incrementHandler = () => treeDispatch({ type: "+" });
  const decrementHandler = () => treeDispatch({ type: "-" });

  return (
    <>
      <h2>
        Store is read directly by all, but dispatch is done through the custom
        root dispatch method
        <br />
        All dependent components get re-rendered
      </h2>
      <div>
        <button onClick={decrementHandler}>-</button> &nbsp;
        {count}
        &nbsp;
        <button onClick={incrementHandler}>+</button>
      </div>
      <hr />
      <Counter1 />
      <Counter2 />
    </>
  );
}

export { treeDispatch };
export default CounterRoot;

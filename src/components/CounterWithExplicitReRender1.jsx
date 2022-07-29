import { useState } from "react";

import store from "../store/storeWithExplicitReRender";

function CounterWithExplicitReRender1() {
  const [, _] = useState();

  const rerender = () => _({});
  const { count } = store.getState();

  const incrementHandler = () =>
    store.dispatch({ type: "+", rerender: rerender });
  const decrementHandler = () =>
    store.dispatch({ type: "-", rerender: rerender });

  return (
    <>
      <button onClick={decrementHandler}>-</button> &nbsp;
      {count}
      &nbsp;
      <button onClick={incrementHandler}>+</button>
    </>
  );
}

export default CounterWithExplicitReRender1;

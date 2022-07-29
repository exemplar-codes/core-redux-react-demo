import { useState } from "react";

import storeWithExplicitReRender from "../store/storeWithExplicitReRender";

function CounterWithExplicitReRender1() {
  const [, _] = useState();

  const rerender = () => _({});
  const { count } = storeWithExplicitReRender.getState();

  const incrementHandler = () =>
    storeWithExplicitReRender.dispatch({ type: "+", rerender: rerender });
  const decrementHandler = () =>
    storeWithExplicitReRender.dispatch({ type: "-", rerender: rerender });

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

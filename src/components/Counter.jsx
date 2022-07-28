import { useState } from "react";

import store from "../store/store";

function Counter() {
  const [, __] = useState();
  const rerender = () => __({});

  const { count } = store.getState();

  return (
    <>
      <button
        onClick={() => {
          store.dispatch({ type: "-", rerender });
        }}
      >
        -
      </button>{" "}
      &nbsp;
      {count}
      &nbsp;
      <button
        onClick={() => {
          store.dispatch({ type: "+", rerender });
        }}
      >
        +
      </button>
    </>
  );
}

export default Counter;

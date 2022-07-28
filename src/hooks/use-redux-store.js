import { useState } from "react";

function useReduxStore(store) {
  const [, _] = useState();
  const rerender = () => _({});

  const latestState = store.getState();

  const dispatchAndReRender = (...arg) => {
    store.dispatch(...arg);
    rerender();
  };

  return [latestState, dispatchAndReRender];
}

export default useReduxStore;

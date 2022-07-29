import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  console.log("Reducer called", action);
  let newState;
  switch (action.type) {
    case "+":
      newState = { ...state, count: state.count + 1 };
      break;

    case "-":
      newState = { ...state, count: state.count - 1 };
      break;

    default:
      newState = state;
  }
  action.rerender && action.rerender();
  return newState;
};

const storeUITree = createStore(reducer);

export default storeUITree;

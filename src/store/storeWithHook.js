import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  console.log("Reducer called");
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
  return newState;
};

const store = createStore(reducer);

export default store;

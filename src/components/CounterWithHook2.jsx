import useReduxStore from "../hooks/use-redux-store";
import store from "../store/storeWithHook";

function CounterWithHook2() {
  const [{ count }, updateStore] = useReduxStore(store);

  return (
    <>
      <button
        onClick={() => {
          updateStore({ type: "-" });
        }}
      >
        -
      </button>{" "}
      &nbsp;
      {count}
      &nbsp;
      <button
        onClick={() => {
          updateStore({ type: "+" });
        }}
      >
        +
      </button>
    </>
  );
}

export default CounterWithHook2;

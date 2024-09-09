import React from "react";
import { CounterContext } from "../CounterContext";

export function Z() {
  let { counter, setCounter } = React.useContext(CounterContext);
  console.log(counter);
  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Increament
      </button>
    </div>
  );
}

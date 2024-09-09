import React from "react";
import { CounterContext } from "./CounterContext";
import { X } from "./X";

export function ContextExample() {
  const [counter, setCounter] = React.useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <X />
    </CounterContext.Provider>
  );
}

import React from "react";
import { Z } from "../Z";
import { CounterContext } from "../CounterContext";

export function Y({}) {
  const { counter } = React.useContext(CounterContext);
  return (
    <div>
      Counter in Y is: {counter}
      <Z />
    </div>
  );
}

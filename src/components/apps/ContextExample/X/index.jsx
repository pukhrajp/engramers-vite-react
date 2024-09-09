import React from "react";
import { Y } from "../Y";
import { CounterContext } from "../CounterContext";

export function X({ children }) {
  const { counter } = React.useContext(CounterContext);
  return (
    <div>
      Counter value in X is: {counter}
      <Y />
    </div>
  );
}

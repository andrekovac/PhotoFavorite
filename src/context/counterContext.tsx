import React from "react";

export type CounterContextT = {
  count: number,
  increment: () => void,
  decrement: () => void,
}

export const CounterContext = React.createContext<CounterContextT>({
  count: 0,
  increment: () => null,
  decrement: () => null,
});

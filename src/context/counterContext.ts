import React from "react";

export type CounterContextT = {
  count: number,
  increment: () => void,
}

export const CounterContext = React.createContext<CounterContextT>({
  count: 0,
  increment: () => null,
});

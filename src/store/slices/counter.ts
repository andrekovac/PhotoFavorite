import { createSlice } from "@reduxjs/toolkit";

import { RootStateT } from "./index";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: state => state + 1,
    // Note that state updates are immutable (with mutable code) thanks to the `immer` library which is used under the hood by redux-toolkit
    decrement: state => state > 0 ? state - 1 : state,
    reset: () => 0,
  },
});

// Two actions generated from the slice
export const { increment, decrement, reset } = counterSlice.actions;

// A selector
export const counterSelector = (state: RootStateT) => state.count;

// The reducer
export default counterSlice.reducer;

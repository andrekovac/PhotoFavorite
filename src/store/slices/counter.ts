import { createSlice } from "@reduxjs/toolkit";

import { RootStateT } from "./index";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: state => state + 1,
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

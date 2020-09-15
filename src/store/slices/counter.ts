import { createSlice } from "@reduxjs/toolkit";

import { RootStateT } from "./index";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: state => state + 1,
  },
});

// Two actions generated from the slice
export const { increment } = counterSlice.actions;

// A selector
export const counterSelector = (state: RootStateT) => state.count;

// The reducer
export default counterSlice.reducer;

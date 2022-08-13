import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increaseCounter: (state, action) => {
      state.count += Number(action.payload);
    },
    decreaseCounter: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export const { increaseCounter, decreaseCounter } = counter.actions;
export default counter.reducer;

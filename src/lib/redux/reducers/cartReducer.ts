import { createSlice, Slice } from "@reduxjs/toolkit";

const cartSlice: Slice = createSlice({
  name: "cart",
  initialState: {
    discounts: [],
  },

  //reducers para manipular estado
  reducers: {
    addNewDiscount: (state, action) => {
      state.discounts.push(action.payload.discount);
    },
    removeTest: (state) => {
      state.testState.pop();
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addNewDiscount, removeTest } = cartSlice.actions;

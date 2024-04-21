import { Discount } from "@/models/Discount";
import { createSlice, Slice } from "@reduxjs/toolkit";

const cartSlice: Slice = createSlice({
  name: "cart",
  initialState: {
    discounts: [],
  },

  //reducers para manipular estado
  reducers: {
    addNewDiscount: (state, action) => {
      const existDiscountIndex = state.discounts.findIndex(
        (item: Discount) => item.id === action.payload.discount.id
      );

      if (existDiscountIndex !== -1) {
        state.discounts[existDiscountIndex] = {
          ...action.payload.discount,
        };
      } else {
        state.discounts.push({
          ...action.payload.discount,
          id: state.discounts.length + 1,
        });
      }
    },
    removeTest: (state) => {
      state.testState.pop();
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addNewDiscount, removeTest } = cartSlice.actions;

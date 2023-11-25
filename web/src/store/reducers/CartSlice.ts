import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartNumber: number;
}

const initialState: CartState = {
  cartNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartNumberUpdate(state, action: PayloadAction<number>) {
      state.cartNumber = action.payload;
    },
  },
});

export const { cartNumberUpdate } = cartSlice.actions;

export default cartSlice.reducer;

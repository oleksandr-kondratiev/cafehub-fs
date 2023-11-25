import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "typings/product";

interface ProductsState {
  products: IProduct[];
  isLoadingProducts: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoadingProducts: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoadingProducts = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoadingProducts = false;
      state.products = action.payload;
    },
  },
});

export const { productsFetching, productsFetchingSuccess } =
  productsSlice.actions;

export default productsSlice.reducer;

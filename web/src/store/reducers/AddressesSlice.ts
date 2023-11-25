import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddress } from "typings/address";

interface AddressesState {
  addresses: IAddress[];
  isLoading: boolean;
}

const initialState: AddressesState = {
  addresses: [],
  isLoading: false,
};

export const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addressesFetching(state) {
      state.isLoading = true;
    },
    addressesFetchingSuccess(state, action: PayloadAction<IAddress[]>) {
      state.isLoading = false;
      state.addresses = action.payload;
    },
  },
});

export const { addressesFetching, addressesFetchingSuccess } =
  addressesSlice.actions;

export default addressesSlice.reducer;

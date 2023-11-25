import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMenu } from "typings/menu";

interface MenusState {
  menus: IMenu[];
  isLoadingMenus: boolean;
}

const initialState: MenusState = {
  menus: [],
  isLoadingMenus: false,
};

export const menusSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {
    menusFetching(state) {
      state.isLoadingMenus = true;
    },
    menusFetchingSuccess(state, action: PayloadAction<IMenu[]>) {
      state.isLoadingMenus = false;
      state.menus = action.payload;
    },
  },
});

export const { menusFetching, menusFetchingSuccess } = menusSlice.actions;

export default menusSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { store } from "..";

import AddressesReducer from "./reducers/AddressesSlice";
import ProductsReducer from "./reducers/ProductsSlice";
import MenusReducer from "./reducers/MenusSlice";
import CartReducer from "./reducers/CartSlice";

const rootReducer = combineReducers({
  AddressesReducer,
  ProductsReducer,
  MenusReducer,
  CartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

import { AppDispatch } from "@store/store";
import { apiServices } from "@services/api-service";

import { addressesFetching, addressesFetchingSuccess } from "./AddressesSlice";
import { productsFetching, productsFetchingSuccess } from "./ProductsSlice";
import { menusFetching, menusFetchingSuccess } from "./MenusSlice";
import { cartNumberUpdate } from "./CartSlice";

import { IAddress } from "typings/address";
import { URL } from "@constants/config";
import { IProduct } from "typings/product";
import { IMenu } from "typings/menu";

export const fetchAddresses = async (dispatch: AppDispatch) => {
  try {
    dispatch(addressesFetching());
    const { data } = await apiServices.fetchData(`${URL}/addresses/getall`);
    dispatch(
      addressesFetchingSuccess(
        data.sort((address: IAddress) => (address.isActive ? -1 : 1))
      )
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = async (dispatch: AppDispatch) => {
  try {
    dispatch(productsFetching());
    const { data } = await apiServices.fetchData(`${URL}/products/getall`);
    dispatch(
      productsFetchingSuccess(
        data.sort((a: IProduct, b: IProduct) =>
          a.created > b.created ? -1 : 1
        )
      )
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMenus = async (dispatch: AppDispatch) => {
  try {
    dispatch(menusFetching());
    const { data } = await apiServices.fetchData(`${URL}/menus/getall`);
    dispatch(
      menusFetchingSuccess(
        data.sort((a: IMenu, b: IMenu) => (a.created > b.created ? -1 : 1))
      )
    );
  } catch (error) {
    console.log(error);
  }
};

export const setCartNumbers = (dispatch: AppDispatch, number: number) => {
  dispatch(cartNumberUpdate(number));
};

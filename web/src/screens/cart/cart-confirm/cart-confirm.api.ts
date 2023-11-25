import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { IOrderCreate } from "typings/order";

import { URL } from "@constants/config";

export const apiCartConfirm = () => {
  const fetchMenus = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/menus/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/products/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const fetchAddresses = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/addresses/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const createOrder = async (order: IOrderCreate) => {
    try {
      await apiServices.postData(`${URL}/orders/create`, order);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    fetchMenus,
    fetchProducts,
    fetchAddresses,
    createOrder,
  };
};

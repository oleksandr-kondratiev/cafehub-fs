import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { ICreateProduct } from "typings/product";
import { ICreateMenu } from "typings/menu";

import { URL } from "@constants/config";

export const ApiManagerCreate = () => {
  const fetchIngredients = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/ingredients/getall`);
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

  const createProduct = async (product: ICreateProduct) => {
    try {
      await apiServices.postData(`${URL}/products/create`, product);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const createMenu = async (menu: ICreateMenu) => {
    try {
      await apiServices.postData(`${URL}/menus/create`, menu);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    fetchIngredients,
    fetchProducts,
    createProduct,
    createMenu,
  };
};

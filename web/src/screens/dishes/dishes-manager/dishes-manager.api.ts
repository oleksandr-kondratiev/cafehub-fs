import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { IIngredient } from "typings/ingredient";
import { ICreateProduct } from "typings/product";
import { ICreateMenu } from "typings/menu";

import { URL } from "@constants/config";

export const ApiManager = () => {
  const fetchProducts = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/products/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const fetchIngredients = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/ingredients/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const createIngredient = async (ingredient: IIngredient) => {
    try {
      await apiServices.postData(`${URL}/ingredients/create`, ingredient);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const updateProduct = async (product: ICreateProduct) => {
    try {
      await apiServices.updateData(`${URL}/products/update`, product);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const updateMenu = async (product: ICreateMenu) => {
    try {
      await apiServices.updateData(`${URL}/products/update`, product);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    fetchProducts,
    fetchIngredients,
    createIngredient,
    updateProduct,
    updateMenu,
  };
};

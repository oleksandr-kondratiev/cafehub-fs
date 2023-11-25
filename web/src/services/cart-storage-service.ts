import { notifyError } from "@components/notify/notify.services";

import { storageService } from "./storage-service";
import { AppDispatch } from "@store/store";
import { setCartNumbers } from "@store/reducers/ActionCreators";

export const cartStorageService = () => {
  const getStorageCartProducts = () => {
    return storageService.getCartProducts();
  };

  const getStorageCartMenus = () => {
    return storageService.getCartMenus();
  };

  const getStorageCartLength = () => {
    const cart = getStorageCartProducts().length + getStorageCartMenus().length;

    if (cart !== null) {
      return cart;
    }
  };

  const addStorageCartDish = (
    param: string,
    item: string,
    dispatch: AppDispatch
  ) => {
    if (param === "product") {
      const products = getStorageCartProducts();
      const addedProducts = [...products, item];

      if (new Set(addedProducts).size === addedProducts.length) {
        storageService.setCartProducts(addedProducts);
      } else {
        notifyError("This product is already in the basket!");
      }
    } else if (param === "menu") {
      const menus = getStorageCartMenus();
      const addedMenus = [...menus, item];

      if (new Set(addedMenus).size === addedMenus.length) {
        storageService.setCartMenus(addedMenus);
      } else {
        notifyError("This product is already in the basket!");
      }
    }

    updateCartDispatch(dispatch);
  };

  const addStorageCartProduct = (item: string, dispatch: AppDispatch) => {
    addStorageCartDish("product", item, dispatch);
  };

  const addStorageCartMenu = (item: string, dispatch: AppDispatch) => {
    addStorageCartDish("menu", item, dispatch);
  };

  const removeStorageCartDish = (param: string, id: string) => {
    switch (param) {
      case "product":
        const products = getStorageCartProducts();
        const removedProducts = products.filter((item: string) => item !== id);

        storageService.setCartProducts(removedProducts);
        break;
      case "menu":
        const menus = getStorageCartMenus();
        const removedCart = menus.filter((item: string) => item !== id);

        storageService.setCartMenus(removedCart);
        break;
    }
  };

  const removeStorageCartProduct = (id: string) => {
    removeStorageCartDish("product", id);
  };

  const removeStorageCartMenu = (id: string) => {
    removeStorageCartDish("menu", id);
  };

  const updateCartDispatch = (dispatch: AppDispatch) => {
    setCartNumbers(dispatch, getStorageCartLength());
  };

  const clearCartDispatch = (dispatch: AppDispatch) => {
    storageService.clearCart();
    setCartNumbers(dispatch, 0);
  };

  return {
    getStorageCartProducts,
    getStorageCartMenus,
    getStorageCartLength,
    addStorageCartProduct,
    addStorageCartMenu,
    removeStorageCartProduct,
    removeStorageCartMenu,
    updateCartDispatch,
    clearCartDispatch,
  };
};

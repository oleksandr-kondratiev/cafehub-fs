import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../hooks/redux";
import { apiCartConfirm } from "./cart-confirm.api";
import { cartStorageService } from "@services/cart-storage-service";
import { storageService } from "@services/storage-service";
import { notifyError, notifySuccess } from "@components/notify/notify.services";

import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

import { ROUTES } from "@constants/routes";
import { IValues } from "./cart-confirm.types";

export const useCartState = () => {
  const navigate = useNavigate();

  const { id } = storageService.getUser();

  const { fetchMenus, fetchProducts, fetchAddresses, createOrder } =
    apiCartConfirm();

  const {
    getStorageCartProducts,
    getStorageCartMenus,
    removeStorageCartProduct,
    removeStorageCartMenu,
    updateCartDispatch,
    clearCartDispatch,
  } = cartStorageService();

  const [state, setState] = useState<IValues>({
    status: "cart",
    products: [],
    menus: [],
    addresses: [],
    order: {
      price: 0,
      date: new Date(),
      deliveryDate: new Date(),
      status: "created",
      comment: "",
      user: id,
      address: "",
      products: getStorageCartProducts(),
      menus: getStorageCartMenus(),
    },
    dish: [],
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    updateCartDishes();
    const dishesSum =
      calculatedOrderSum(state.products, state.order.products) +
      calculatedOrderSum(state.menus, state.order.menus);

    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        price: dishesSum,
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.order.products, state.order.menus]);

  const handleSetInitial = () => {
    setProducts(state.order.products);
    setMenus(state.order.menus);
    setAddresses();
  };

  const addSingleDishCount = (id: string) => {
    setState((state) => ({
      ...state,
      dish: [...state.dish, id],
    }));
  };

  const removeSingleDishCount = () => {
    const newDishCount = state.dish.slice(0, -1);
    setState((state) => ({
      ...state,
      dish: newDishCount,
    }));
  };

  const handleBackPage = () => {
    switch (state.status) {
      case "cart":
        navigate(ROUTES.main);
        break;
      case "delivery":
        setState((state) => ({
          ...state,
          status: "cart",
        }));
        break;
      case "submit":
        setState((state) => ({
          ...state,
          status: "delivery",
        }));
        break;
    }
  };

  const handleNextPage = () => {
    switch (state.status) {
      case "cart":
        state.order.products.length || state.order.menus.length
          ? setState((state) => ({
              ...state,
              status: "delivery",
            }))
          : notifyError("You must add to cart at least 1 dish!");
        break;
      case "delivery":
        state.order.address
          ? setState((state) => ({
              ...state,
              status: "submit",
            }))
          : notifyError("You must select delivery address!");
        break;
      case "submit":
        submitOrder();
        break;
    }
  };

  const handleDeleteDish = (id: string, count: number) => {
    if (state.order.products.find((elem) => elem === id)) {
      removeStorageCartProduct(id);
      setOrderPrice(id, count);
    } else {
      removeStorageCartMenu(id);
      setOrderPrice(id, count);
    }

    updateCartDispatch(dispatch);

    setState((state) => ({
      ...state,
      menus: state.menus.filter((menu) => menu.id !== id),
      products: state.products.filter((product) => product.id !== id),
      order: {
        ...state.order,
        products: state.order.products.filter((elem) => elem !== id),
        menus: state.order.menus.filter((elem) => elem !== id),
      },
    }));
  };

  const setOrderPrice = (id: string, count: number) => {
    let orderPrice: number = 0;
    if (state.order.products.find((elem) => elem === id)) {
      orderPrice =
        state.products.find((product) => product.id === id)!.price * count;
    } else {
      orderPrice = state.menus.find((menu) => menu.id === id)!.price * count;
    }

    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        price: state.order.price - orderPrice,
      },
    }));
  };

  const updateCartDishes = () => {
    setState((state) => ({
      ...state,
      menus: state.menus.filter((menu) =>
        state.order.menus.some((id) => id === menu.id)
      ),
      products: state.products.filter((product) =>
        state.order.products.some((id) => id === product.id)
      ),
    }));
  };

  const calculatedOrderSum = (itemsArray: any, orderedItems: any) => {
    return itemsArray.reduce(
      (acc: number, { id, price }: { id: string; price: number }) => {
        orderedItems.forEach((elem: string) => {
          if (elem === id) acc += price;
        });

        return acc;
      },
      0
    );
  };

  const setProducts = async (filters: string[]) => {
    const products = await fetchProducts();
    const filteredProducts = products.filter((product: IProduct) =>
      filters.some((id) => id === product.id)
    );

    setState((state) => ({
      ...state,
      products: filteredProducts,
      order: {
        ...state.order,
        products: filteredProducts.map((product: IProduct) => product.id),
      },
    }));
  };

  const setMenus = async (filters: string[]) => {
    const menus = await fetchMenus();
    const filteredMenus = menus.filter((menu: IMenu) =>
      filters.some((id) => id === menu.id)
    );

    setState((state) => ({
      ...state,
      menus: filteredMenus,
      order: {
        ...state.order,
        menus: filteredMenus.map((menu: IMenu) => menu.id),
      },
    }));
  };

  const setAddresses = async () => {
    const addresses = await fetchAddresses();

    setState((state) => ({
      ...state,
      addresses: addresses,
    }));
  };

  const handleAddProductAmount = async (id: string) => {
    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        products: [...state.order.products, id],
      },
      id: id,
    }));
  };

  const handleAddMenuAmount = (id: string) => {
    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        menus: [...state.order.menus, id],
      },
    }));
  };

  const onClickRemoveItemHandler = (dishes: string[], id: string) => {
    const index = dishes.indexOf(id);
    const arr = [...dishes];
    if (index > -1) arr.splice(index, 1);
    return arr;
  };

  const handleDeleteProductAmount = (id: string) => {
    const removedProduct = onClickRemoveItemHandler(state.order.products, id);

    if (!removedProduct.find((item) => item === id)) {
      removeStorageCartProduct(id);
      updateCartDispatch(dispatch);
    }

    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        products: removedProduct,
      },
    }));
  };

  const handleDeleteMenuAmount = (id: string) => {
    const removedMenu = onClickRemoveItemHandler(state.order.menus, id);

    if (!removedMenu.find((item) => item === id)) {
      removeStorageCartMenu(id);
      updateCartDispatch(dispatch);
    }

    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        menus: removedMenu,
      },
    }));
  };

  const handleSetAddress = (id: string) => {
    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        address: id,
      },
    }));
  };

  const handleSetComment = (comment: string) => {
    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        comment: comment,
      },
    }));
  };

  const handleSetDeliveryDate = (date: Date) => {
    setState((state) => ({
      ...state,
      order: {
        ...state.order,
        deliveryDate: date,
      },
    }));
  };

  const submitOrder = async () => {
    await createOrder(state.order);
    clearCartDispatch(dispatch);

    navigate(ROUTES.main);
    notifySuccess("Order was created successfully!");
  };

  return {
    ...state,
    handleSetInitial,
    handleDeleteDish,
    handleBackPage,
    handleNextPage,
    handleAddProductAmount,
    handleAddMenuAmount,
    handleDeleteProductAmount,
    handleDeleteMenuAmount,
    addSingleDishCount,
    removeSingleDishCount,
    handleSetAddress,
    handleSetComment,
    handleSetDeliveryDate,
  };
};

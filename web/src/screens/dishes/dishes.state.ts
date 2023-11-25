import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMenus, fetchProducts } from "@store/reducers/ActionCreators";

import { IProduct } from "typings/product";
import { IValues } from "./dishes.types";

const InitialValues = {
  id: "",
  param: "",
  product: {
    id: "",
    created: "",
    name: "",
    description: "",
    category: "",
    subcategory: "",
    productImage: "",
    price: 1,
    weight: 1,
    ingredients: [],
  },
  menu: {
    id: "",
    created: "",
    name: "",
    description: "",
    price: 1,
    products: [],
  },
  recommendations: [],
};

export const useDishState = () => {
  const [state, setState] = useState<IValues>(InitialValues);

  const { ProductsReducer, MenusReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setDish(state.id, state.param);
    setRecommendations(ProductsReducer.products);
  }, [ProductsReducer.products, MenusReducer.menus]);

  const handleFetchData = async () => {
    await dispatch(fetchProducts);
    await dispatch(fetchMenus);
  };

  const handleSetParam = (link: string) => {
    const id: string = link.split("/").pop()!;

    const windowLink = link.split("/");
    const param = windowLink[windowLink.length - 2];

    handleFetchData();
    setState((state) => ({
      ...state,
      id: id,
      param: param,
    }));
  };

  const setDish = (id: string, param: string) => {
    if (param === "product") {
      setState((state) => ({
        ...state,
        product: ProductsReducer.products.find((product) => product.id === id)!,
      }));
    } else {
      setState((state) => ({
        ...state,
        menu: MenusReducer.menus.find((menu) => menu.id === id)!,
      }));
    }
  };

  const setRecommendations = (products: IProduct[]) => {
    setState((state) => ({
      ...state,
      recommendations: products.slice(2),
    }));
  };

  return {
    ...state,
    handleSetParam,
  };
};

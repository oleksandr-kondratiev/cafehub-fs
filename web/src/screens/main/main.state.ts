import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";

import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";
import { ISortingBy, IValues } from "./main.types";

import {
  fetchMenus,
  fetchProducts,
  setCartNumbers,
} from "@store/reducers/ActionCreators";
import { cartStorageService } from "@services/cart-storage-service";

export const useMainState = () => {
  const [state, setState] = useState<IValues>({
    products: [],
    menus: [],
    isLoading: false,
    isMenu: false,
    sorting: "Sorting",
    filters: {
      drinks: ["Hot drinks", "Cocktails", "Non-alcohol cocktails"],
      food: ["Main", "Dessert", "Soup", "Salad", "Burger", "Pizza"],
    },
    cartNumber: 0,
    incomingFilters: [],
  });

  const { ProductsReducer, MenusReducer } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const { addStorageCartProduct, addStorageCartMenu } = cartStorageService();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setInitialGoods();
  }, [ProductsReducer, MenusReducer]);

  const handleChangeIsMenu = ({
    target,
  }: React.MouseEvent<HTMLButtonElement>) => {
    setState((state) => ({
      ...state,
      isMenu: (target as HTMLButtonElement).id === "menu",
    }));
  };

  const fetchData = async () => {
    await dispatch(fetchProducts);
    await dispatch(fetchMenus);
  };

  const setInitialGoods = () => {
    setState((state) => ({
      ...state,
      isLoading: ProductsReducer.isLoadingProducts,
      products: ProductsReducer.products,
      menus: MenusReducer.menus,
    }));
  };

  const handleSorting = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const id = (target as HTMLButtonElement).id;
    setState((state) => ({
      ...state,
      sorting: id,
    }));

    if (id !== "Sorting") {
      let lastWord = id.split(" ").pop() as ISortingBy;
      setState((state) => ({
        ...state,
        products: [...state.products].sort((a: IProduct, b: IProduct) =>
          a[lastWord] > b[lastWord] ? -1 : 1
        ),
        menus: [...state.menus].sort((a: IMenu, b: IMenu) =>
          a[lastWord] > b[lastWord] ? -1 : 1
        ),
      }));
    } else {
      setState((state) => ({
        ...state,
        products: [...state.products].sort((a: IProduct, b: IProduct) =>
          a.created > b.created ? -1 : 1
        ),
        menus: [...state.menus].sort((a: IMenu, b: IMenu) =>
          a.created > b.created ? -1 : 1
        ),
      }));
    }
  };

  const handleFilter = (subcategory: string, isActive: boolean) => {
    setState({
      ...state,
      incomingFilters: isActive
        ? [...state.incomingFilters, subcategory]
        : state.incomingFilters.filter((item) => item !== subcategory),
    });
  };

  const handleProductFilter = (
    arrToFilter: IProduct[],
    filterParams: string[]
  ) => {
    return arrToFilter.filter((item) =>
      filterParams.some(
        (el) => el.toLowerCase() === item.subcategory.toLowerCase()
      )
    );
  };

  const handleMenuFilter = (arrToFilter: IMenu[], filterParams: string[]) => {
    return arrToFilter.filter((menu) => {
      return !filterParams.some(
        (product) =>
          !menu.products.some(
            (menuProduct) =>
              menuProduct.subcategory.toLowerCase() === product.toLowerCase()
          )
      );
    });
  };

  useEffect(() => {
    if (state.incomingFilters.length !== 0) {
      const filteredProduct = handleProductFilter(
        ProductsReducer.products,
        state.incomingFilters
      );
      const filteredMenus = handleMenuFilter(
        MenusReducer.menus,
        state.incomingFilters
      );
      setState({
        ...state,
        products: filteredProduct,
        menus: filteredMenus,
      });
    } else {
      setState({
        ...state,
        products: ProductsReducer.products,
        menus: MenusReducer.menus,
      });
    }
  }, [state.incomingFilters]);

  const handleAddCartProduct = (id: string) => {
    addStorageCartProduct(id, dispatch);
  };

  const handleAddCartMenu = (id: string) => {
    addStorageCartMenu(id, dispatch);
  };

  return {
    ...state,
    handleChangeIsMenu,
    handleSorting,
    handleFilter,
    handleAddCartProduct,
    handleAddCartMenu,
  };
};

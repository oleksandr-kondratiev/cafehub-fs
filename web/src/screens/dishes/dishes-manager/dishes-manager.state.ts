import { useState } from "react";
import _ from "lodash";

import { ApiManager } from "./dishes-manager.api";

import { IIngredient } from "typings/ingredient";
import { ICreateMenu, IMenu } from "typings/menu";
import { ICreateProduct, IProduct } from "typings/product";

import { IValues } from "./dishes-manager.types";

const InitialValues = {
  productUpdate: {
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
  menuUpdate: {
    id: "",
    created: "",
    name: "",
    description: "",
    price: 1,
    products: [],
  },
  description: "",
  weight: 1,
  price: 1,
  addIngredients: [],
  addProducts: [],
};

export const useManagerState = () => {
  const [state, setState] = useState<IValues>(InitialValues);

  const {
    fetchIngredients,
    fetchProducts,
    createIngredient,
    updateProduct,
    updateMenu,
  } = ApiManager();

  const setInitialProduct = async (dish: IProduct) => {
    const product: IProduct = { ...dish };
    await setProduct(product);
  };

  const setInitialMenu = async (dish: IMenu) => {
    const menu: IMenu = { ...dish };
    await setMenu(menu);
  };

  const setProduct = async (product: IProduct) => {
    const ingredients = await fetchIngredients();

    setState((state) => ({
      ...state,
      productUpdate: product,
      description: product.description,
      addIngredients: ingredients,
    }));
  };

  const setMenu = async (menu: IMenu) => {
    const products = await fetchProducts();

    setState((state) => ({
      ...state,
      menuUpdate: menu,
      description: menu.description,
      addProducts: products,
    }));
  };

  const handleDeleteIngredients = (id: string) => {
    const updatedIngredients = state.productUpdate.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );

    setState((state) => ({
      ...state,
      productUpdate: {
        ...state.productUpdate,
        ingredients: updatedIngredients,
      },
    }));
  };

  const handleDeleteProducts = (id: string) => {
    const updatedProducts = state.menuUpdate.products.filter(
      (product) => product.id !== id
    );

    setState((state) => ({
      ...state,
      menuUpdate: {
        ...state.menuUpdate,
        products: updatedProducts,
      },
    }));
  };

  const handleAddIngredients = (id: string) => {
    const ingredient = state.addIngredients.find(
      (ingredient) => ingredient.id === id
    );
    setState((state) => ({
      ...state,
      productUpdate: {
        ...state.productUpdate,
        ingredients: [
          ...state.productUpdate.ingredients,
          {
            id: ingredient!.id,
            name: ingredient!.name,
            isAllergen: ingredient!.isAllergen,
          },
        ],
      },
    }));
  };

  const handleAddProducts = (id: string) => {
    const product = state.addProducts.find((product) => product.id === id);
    setState((state) => ({
      ...state,
      menuUpdate: {
        ...state.menuUpdate,
        products: [
          ...state.menuUpdate.products,
          {
            id: product!.id,
            created: product!.created,
            name: product!.name,
            description: product!.description,
            category: product!.category,
            subcategory: product!.subcategory,
            productImage: product!.productImage,
            price: product!.price,
            weight: product!.weight,
            ingredients: product!.ingredients,
          },
        ],
      },
    }));
  };

  const handleCreateIngredient = async (ingredient: IIngredient) => {
    await createIngredient(ingredient);
  };

  const handleSetDescription = (event: React.FormEvent<HTMLInputElement>) => {
    const description = event.currentTarget.value;

    if (description) {
      setState((state) => ({
        ...state,
        productUpdate: {
          ...state.productUpdate,
          description: description,
        },
      }));
    }

    if (!description) {
      setState((state) => ({
        ...state,
        productUpdate: {
          ...state.productUpdate,
          description: state.description,
        },
      }));
    }
  };

  const handleSetPrice = (event: React.FormEvent<HTMLInputElement>) => {
    const price = +event.currentTarget.value;

    setState((state) => ({
      ...state,
      productUpdate: {
        ...state.productUpdate,
        price: price,
      },
    }));
  };

  const handleSetWeight = (event: React.FormEvent<HTMLInputElement>) => {
    const weight = +event.currentTarget.value;

    setState((state) => ({
      ...state,
      productUpdate: {
        ...state.productUpdate,
        weight: weight,
      },
    }));
  };

  const handleSubmitProduct = async () => {
    const productToUpdate: ICreateProduct = {
      ..._.omit(state.productUpdate, "created"),
      ingredients: state.productUpdate.ingredients.map(
        (ingredient) => ingredient.id!
      ),
    };

    await updateProduct(productToUpdate);
    window.location.reload();
  };

  const handleSubmitMenu = async () => {
    const menuToUpdate: ICreateMenu = {
      ..._.omit(state.menuUpdate, "created"),
      products: state.menuUpdate.products.map((product) => product.id!),
    };

    await updateMenu(menuToUpdate);
    window.location.reload();
  };

  return {
    ...state,
    setProduct,
    setInitialProduct,
    setInitialMenu,
    handleDeleteIngredients,
    handleDeleteProducts,
    handleAddIngredients,
    handleAddProducts,
    handleCreateIngredient,
    handleSetDescription,
    handleSetPrice,
    handleSetWeight,
    handleSubmitProduct,
    handleSubmitMenu,
  };
};

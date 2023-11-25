import { useState } from "react";

import { ApiManagerCreate } from "./create-dish.api";
import { notifyError, notifySuccess } from "@components/notify/notify.services";

import { FormMenuValues, FormProductValues } from "./create-dish.types";
import { ICreateProduct, IProduct } from "typings/product";
import { IIngredient } from "typings/ingredient";
import { ICreateMenu, IMenu } from "typings/menu";

interface IValues {
  addIngredients: IIngredient[];
  addProducts: IProduct[];
  product: Omit<IProduct, "created">;
  menu: Omit<IMenu, "created">;
}

const initialState: IValues = {
  addIngredients: [],
  addProducts: [],
  product: {
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
    name: "",
    description: "",
    price: 1,
    products: [],
  },
};

export const useCreateDishState = () => {
  const [state, setState] = useState(initialState);

  const { fetchIngredients, fetchProducts, createProduct, createMenu } =
    ApiManagerCreate();

  const handleSetAddIngredients = async () => {
    const ingredients = await fetchIngredients();

    setState((state) => ({
      ...state,
      addIngredients: ingredients,
    }));
  };

  const handleSetAddProducts = async () => {
    const products = await fetchProducts();

    setState((state) => ({
      ...state,
      addProducts: products,
    }));
  };

  const handleDeleteIngredients = (id: string) => {
    const updatedIngredients = state.product.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );

    setState((state) => ({
      ...state,
      product: {
        ...state.product,
        ingredients: updatedIngredients,
      },
    }));
  };

  const handleDeleteProducts = (id: string) => {
    const updatedProducts = state.menu.products.filter(
      (product) => product.id !== id
    );

    setState((state) => ({
      ...state,
      menu: {
        ...state.menu,
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
      product: {
        ...state.product,
        ingredients: [
          ...state.product.ingredients,
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
      menu: {
        ...state.menu,
        products: [
          ...state.menu.products,
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

  const handleSetProductImage = (dataUrl: string | ArrayBuffer | null) => {
    setState((state) => ({
      ...state,
      product: {
        ...state.product,
        productImage: dataUrl as string,
      },
    }));
  };

  const handleSubmitFormProduct = async (values: FormProductValues) => {
    const productToCreate: ICreateProduct = {
      name: values.name,
      description: values.description,
      category: values.category,
      productImage: state.product.productImage,
      subcategory: values.subcategory,
      price: +values.price,
      weight: +values.weight,
      ingredients: state.product.ingredients.map(
        (ingredient) => ingredient.id!
      ),
    };

    if (
      Object.values(productToCreate).filter((item) => item === "" || item === 0)
        .length !== 0
    ) {
      notifyError("You must enter all values of the form!");
    } else {
      await createProduct(productToCreate);
      window.location.reload();
      notifySuccess("Product was created successfully!");
    }
  };

  const handleSubmitFormMenu = async (values: FormMenuValues) => {
    const menuToCreate: ICreateMenu = {
      name: values.name,
      description: values.description,
      price: state.menu.products
        .map((product) => product.price)
        .reduce((a, b) => a + b, 0),
      products: state.menu.products.map((product) => product.id!),
    };

    if (menuToCreate.products.length < 2) {
      notifyError("The menu must contain at least 2 products!");
    } else if (menuToCreate.products.length > 7) {
      notifyError("The menu should contain no more than 6 products!");
    } else if (
      Object.values(menuToCreate).filter((item) => item === "" || item === 0)
        .length !== 0
    ) {
      notifyError("You must enter all values of the form!");
    } else {
      await createMenu(menuToCreate);
      window.location.reload();
      notifySuccess("Menu was created successfully!");
    }
  };

  return {
    ...state,
    handleSetAddIngredients,
    handleSetAddProducts,
    handleDeleteIngredients,
    handleDeleteProducts,
    handleAddIngredients,
    handleAddProducts,
    handleSetProductImage,
    handleSubmitFormProduct,
    handleSubmitFormMenu,
  };
};

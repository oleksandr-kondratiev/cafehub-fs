import { IIngredient } from "./ingredient";

export interface IProduct {
  id?: string;
  created: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  productImage: string;
  price: number;
  weight: number;
  ingredients: IIngredient[];
}

export interface ICreateProduct {
  id?: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  productImage: string;
  price: number;
  weight: number;
  ingredients: string[];
}

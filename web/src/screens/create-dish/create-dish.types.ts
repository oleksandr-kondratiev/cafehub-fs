import { NavigateFunction } from "react-router-dom";

export interface CreateDishProps {
  navigate: NavigateFunction;
}

export interface FormProductValues {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: string;
  weight: string;
}

export interface FormMenuValues {
  name: string;
  description: string;
}

export type valuesListTypes =
  | "name"
  | "description"
  | "price"
  | "weight"
  | "category"
  | "subcategory";

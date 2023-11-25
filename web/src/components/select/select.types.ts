import { IIngredient } from "typings/ingredient";
import { IProduct } from "typings/product";

export type IsMultiType = false;

export interface IMyOption {
  id: string;
  label: string;
  value?: string;
}

export interface SelectProps {
  options:
    | Array<IIngredient>
    | Array<IProduct>
    | {
        id: string;
        name: string;
      }[];
  handleAddIngredients: (id: string) => void;
}

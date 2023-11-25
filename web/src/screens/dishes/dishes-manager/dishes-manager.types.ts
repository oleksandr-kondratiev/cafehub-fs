import { IIngredient } from "typings/ingredient";
import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export interface DishesManagerProps {
  param: string;
  product: IProduct;
  menu: IMenu;
}

export interface IValues {
  productUpdate: IProduct;
  menuUpdate: IMenu;
  description: string;
  weight: number;
  price: number;
  addIngredients: IIngredient[];
  addProducts: IProduct[];
}

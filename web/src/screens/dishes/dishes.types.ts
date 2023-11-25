import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export interface IValues {
  id: string;
  param: string;
  product: IProduct;
  menu: IMenu;
  recommendations: IProduct[];
}

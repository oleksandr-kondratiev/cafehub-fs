import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export interface DishesUserProps {
  param: string;
  product: IProduct;
  menu: IMenu;
  recommendations: IProduct[];
  handleNavigate: (param: string, id: string) => void;
}

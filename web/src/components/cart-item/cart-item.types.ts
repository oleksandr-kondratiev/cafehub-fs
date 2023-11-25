import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export interface CartItemProps {
  product?: IProduct;
  menu?: IMenu;

  handleDeleteDish: (id: string, count: number) => void;
  handleAddDishAmount: (id: string) => void;
  handleDeleteDishAmount: (id: string) => void;
}

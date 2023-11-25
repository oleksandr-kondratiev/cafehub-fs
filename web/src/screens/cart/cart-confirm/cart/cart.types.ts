import { IMenu } from "typings/menu";
import { IOrderCreate } from "typings/order";
import { IProduct } from "typings/product";

export interface CartProps {
  products: IProduct[];
  menus: IMenu[];
  order: IOrderCreate;

  handleSetInitial: () => void;
  handleDeleteDish: (id: string, count: number) => void;
  handleAddProductAmount: (id: string) => void;
  handleAddMenuAmount: (id: string) => void;
  handleDeleteProductAmount: (id: string) => void;
  handleDeleteMenuAmount: (id: string) => void;
}

import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export interface ProductsProps {
  products: IProduct[];
  menus: IMenu[];

  isLoading: boolean;
  isMenu: boolean;

  handleNavigate: (param: string, id: string) => void;
  handleAddCartProduct: (id: string) => void;
  handleAddCartMenu: (id: string) => void;
}

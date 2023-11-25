import { IMenu } from "typings/menu";
import { IProduct } from "typings/product";

export type ISortingBy = "name" | "price";

export type IFilterCaption = "drinks" | "food";

export interface IValues {
  products: IProduct[];
  menus: IMenu[];
  isLoading: boolean;
  isMenu: boolean;
  sorting: string;
  filters: {
    drinks: string[];
    food: string[];
  };
  cartNumber: number;
  incomingFilters: string[];
}

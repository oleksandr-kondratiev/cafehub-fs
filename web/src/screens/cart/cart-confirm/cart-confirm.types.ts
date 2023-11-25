import { IAddress } from "typings/address";
import { IMenu } from "typings/menu";
import { IOrderCreate } from "typings/order";
import { IProduct } from "typings/product";

export type OrderStatusType = "cart" | "delivery" | "submit";

export interface IValues {
  status: OrderStatusType;
  products: IProduct[];
  menus: IMenu[];
  addresses: IAddress[];
  order: IOrderCreate;
  dish: string[];
}

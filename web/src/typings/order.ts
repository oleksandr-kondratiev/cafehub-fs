import { IAddress } from "./address";
import { IMenu } from "./menu";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IOrder {
  id: string;
  countId: number;
  price: number;
  date: Date;
  deliveryDate: Date;
  status: string;
  comment: string;
  user: IUser;
  address: IAddress;
  products: IProduct[];
  menus: IMenu[];
}

export interface IOrderCreate {
  price: number;
  date: Date;
  deliveryDate: Date;
  status: string;
  comment: string;
  user: string;
  address: string;
  products: string[];
  menus: string[];
}

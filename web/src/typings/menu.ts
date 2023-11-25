import { IProduct } from "./product";

export interface IMenu {
  id?: string;
  created: string;
  name: string;
  description: string;
  price: number;
  products: IProduct[];
}

export interface ICreateMenu {
  id?: string;
  name: string;
  description: string;
  price: number;
  products: string[];
}

import { IOrder } from "typings/order";

export interface OrderProps {
  role: string;
  ordersByDate: { date: string; orders: IOrder[] };
  handleSetModal: (caption: string, children: JSX.Element) => void;
  handleRemoveOrder: (id: string) => void;
  handleChangeOrder: (id: string, status: string) => void;
}

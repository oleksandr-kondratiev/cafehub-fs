import { IOrder } from "typings/order";

export interface OrderItemProps {
  role: string;
  order: IOrder;
  handleSetModal: (caption: string, children: JSX.Element) => void;
  handleRemoveOrder: (id: string) => void;
  handleChangeOrder: (id: string, status: string) => void;
}

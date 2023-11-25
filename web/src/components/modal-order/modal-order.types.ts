import { IOrder } from "typings/order";

export interface ModalOrderProps {
  order: IOrder;
  handleRemoveOrder?: (id: string) => void;
  handleChangeOrder?: (id: string, status: string) => void;
}

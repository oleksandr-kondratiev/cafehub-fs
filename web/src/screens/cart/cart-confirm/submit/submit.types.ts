import { IAddress } from "typings/address";
import { IOrderCreate } from "typings/order";

export interface CartSubmitProps {
  order: IOrderCreate;
  address: IAddress;
}

import { IAddress } from "typings/address";

export interface DeliveryProps {
  addresses: IAddress[];
  handleSetAddress: (id: string) => void;
  handleSetComment: (comment: string) => void;
  handleSetDeliveryDate: (date: Date) => void;
}

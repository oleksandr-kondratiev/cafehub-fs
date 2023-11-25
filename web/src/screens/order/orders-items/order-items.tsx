import { OrderItem } from "@components/order-item/order-item";

import { IOrder } from "typings/order";
import { OrderProps } from "../order.types";

import { OrderDate, OrderWrapper } from "../order.styled";

export const OrderItems = ({
  role,
  ordersByDate,
  handleSetModal,
  handleRemoveOrder,
  handleChangeOrder,
}: OrderProps) => {
  return (
    <OrderWrapper>
      <OrderDate>{ordersByDate.date}</OrderDate>
      {ordersByDate.orders.map((order: IOrder) => (
        <OrderItem
          key={order.id}
          role={role}
          order={order}
          handleSetModal={handleSetModal}
          handleRemoveOrder={handleRemoveOrder}
          handleChangeOrder={handleChangeOrder}
        />
      ))}
    </OrderWrapper>
  );
};

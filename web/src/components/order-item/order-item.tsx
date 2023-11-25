import { format } from "date-fns";

import { Button } from "@components/button/button";
import { ModalOrder } from "@components/modal-order/modal-order";

import { OrderItemProps } from "./order-item.types";

import { ICONS } from "@constants/icons";
import { ROLES } from "@constants/roles";

import {
  OrderItemWrapper,
  SectionWrapper,
  OrderId,
  OrderTime,
  OrderComment,
} from "./order-item.styled";

export const OrderItem = ({
  role,
  order,
  handleSetModal,
  handleRemoveOrder,
  handleChangeOrder,
}: OrderItemProps) => {
  const handleClick = () => {
    handleSetModal(
      `Order ${order.id.split("-")[1]}`,
      <ModalOrder
        order={order}
        handleRemoveOrder={handleRemoveOrder}
        handleChangeOrder={handleChangeOrder}
      />
    );
  };

  return (
    <OrderItemWrapper onClick={handleClick}>
      <SectionWrapper>
        <OrderId>
          Order: {role === ROLES.user ? order.countId : order.id.split("-")[1]}
        </OrderId>
        <OrderTime>time: {format(new Date(order.date), "hh:mm")}</OrderTime>
      </SectionWrapper>
      <OrderComment>{order.comment || "no comments"}</OrderComment>
      <Button isIcon>
        <img src={ICONS.chevronRight} alt="icon" />
      </Button>
    </OrderItemWrapper>
  );
};

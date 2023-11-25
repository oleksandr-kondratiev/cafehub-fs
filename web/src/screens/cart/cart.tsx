import React from "react";

import { OrderConfirm } from "../cart/cart-confirm/cart-confirm";
import { Unauthorized } from "./unauthorized/unauthorized";

import { storageService } from "@services/storage-service";

import { Container } from "../../styles/container.styled";

export const Cart: React.FC = () => {
  const { role } = storageService.getUser();

  return (
    <Container maxWidth="694px">
      {role ? <OrderConfirm /> : <Unauthorized />}
    </Container>
  );
};

import React, { useEffect } from "react";

import { Button } from "@components/button/button";
import { Cart } from "./cart/cart";
import { Delivery } from "./delivery/delivery";
import { Submit } from "./submit/submit";

import { useCartState } from "./cart-confirm.state";

import {
  CartConfirmWrapper,
  CartConfirmButtons,
  TextButton,
  CartConfirmCaption,
} from "./cart-confirm.styled";

export const OrderConfirm: React.FC = () => {
  const {
    status,
    products,
    menus,
    order,
    addresses,
    handleSetInitial,
    handleDeleteDish,
    handleBackPage,
    handleNextPage,
    handleAddProductAmount,
    handleAddMenuAmount,
    handleDeleteProductAmount,
    handleDeleteMenuAmount,
    handleSetAddress,
    handleSetComment,
    handleSetDeliveryDate,
  } = useCartState();

  useEffect(() => {
    handleSetInitial();
  }, []);

  return (
    <CartConfirmWrapper>
      <CartConfirmCaption>
        {status === "cart" ? "Cart" : "Order"}
      </CartConfirmCaption>
      {status === "cart" && (
        <Cart
          products={products}
          menus={menus}
          order={order}
          handleSetInitial={handleSetInitial}
          handleDeleteDish={handleDeleteDish}
          handleAddProductAmount={handleAddProductAmount}
          handleAddMenuAmount={handleAddMenuAmount}
          handleDeleteProductAmount={handleDeleteProductAmount}
          handleDeleteMenuAmount={handleDeleteMenuAmount}
        />
      )}
      {status === "delivery" && (
        <Delivery
          addresses={addresses}
          handleSetAddress={handleSetAddress}
          handleSetComment={handleSetComment}
          handleSetDeliveryDate={handleSetDeliveryDate}
        />
      )}
      {status === "submit" && (
        <Submit
          address={addresses.find((address) => address.id === order.address)!}
          order={order}
        />
      )}
      <CartConfirmButtons>
        <TextButton onClick={handleBackPage}>Back</TextButton>
        <Button isValid onClick={handleNextPage}>
          {status === "submit" ? "Submit" : "Next"}
        </Button>
      </CartConfirmButtons>
    </CartConfirmWrapper>
  );
};

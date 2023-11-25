import { useEffect } from "react";

import { Button } from "@components/button/button";
import { MenuImage } from "@components/menu-image/menu-image";

import { useCartState } from "@screens/cart/cart-confirm/cart-confirm.state";

import { CartItemProps } from "./cart-item.types";

import { ICONS } from "@constants/icons";

import {
  CartItemWrapper,
  CartWrapper,
  CartImage,
  CartRemove,
  CartName,
  CartDescription,
  CartNumber,
  CartPrice,
  CartNum,
  CartImageWrapper,
} from "./cart-item.styled";

export const CartItem = ({
  product,
  menu,
  handleDeleteDish,
  handleAddDishAmount,
  handleDeleteDishAmount,
}: CartItemProps) => {
  const { dish, addSingleDishCount, removeSingleDishCount } = useCartState();

  useEffect(() => {
    setDishCount();
  }, []);

  const setDishCount = () => {
    product ? addSingleDishCount(product.id!) : addSingleDishCount(menu!.id!);
  };

  const handleClickAddDishAmount = () => {
    if (product) {
      handleAddDishAmount(product.id!);
      setDishCount();
    } else {
      handleAddDishAmount(menu!.id!);
      setDishCount();
    }
  };

  const handleClickDeleteDishAmount = () => {
    if (product) {
      handleDeleteDishAmount(product.id!);
      removeSingleDishCount();
    } else {
      handleDeleteDishAmount(menu!.id!);
      removeSingleDishCount();
    }
  };

  const handleRemove = () => {
    product
      ? handleDeleteDish(product.id!, dish.length)
      : handleDeleteDish(menu!.id!, dish.length);
  };

  return (
    <CartWrapper>
      <CartItemWrapper>
        <CartImageWrapper>
          {product ? (
            <CartImage src={product.productImage} />
          ) : (
            <MenuImage menu={menu!} />
          )}
        </CartImageWrapper>
        <CartRemove onClick={handleRemove}>Remove</CartRemove>
      </CartItemWrapper>
      <CartItemWrapper>
        <CartName>{product ? product.name : menu!.name}</CartName>
        <CartDescription>
          {product ? product.description : menu!.description}
        </CartDescription>
      </CartItemWrapper>
      <CartItemWrapper>
        <CartNumber>
          <Button isIcon onClick={handleClickDeleteDishAmount}>
            <img src={ICONS.chevronLeft} alt="icon" />
          </Button>
          <CartNum>{dish.length}</CartNum>
          <Button isIcon onClick={handleClickAddDishAmount}>
            <img src={ICONS.chevronRight} alt="icon" />
          </Button>
        </CartNumber>
        <CartPrice>{product ? product.price : menu!.price}</CartPrice>
      </CartItemWrapper>
    </CartWrapper>
  );
};

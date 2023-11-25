import { CartItem } from "@components/cart-item/cart-item";

import { CartProps } from "./cart.types";

import { IMAGES } from "@constants/images";

import {
  CartBox,
  CartWrapper,
  CartPriceWrapper,
  PriceCaption,
  PriceNumber,
  CartEmpty,
  CartEmptyImage,
  CartEmptyCaption,
  CartEmptyText,
} from "./cart.styled";

export const Cart = ({
  products,
  menus,
  order,
  handleDeleteDish,
  handleAddProductAmount,
  handleAddMenuAmount,
  handleDeleteProductAmount,
  handleDeleteMenuAmount,
}: CartProps) => {
  const dishesLength = products.length + menus.length;

  return (
    <CartBox>
      {dishesLength !== 0 ? (
        <CartWrapper>
          {menus.map((menu) => (
            <CartItem
              key={menu.id}
              menu={menu}
              handleDeleteDish={handleDeleteDish}
              handleAddDishAmount={handleAddMenuAmount}
              handleDeleteDishAmount={handleDeleteMenuAmount}
            />
          ))}
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleDeleteDish={handleDeleteDish}
              handleAddDishAmount={handleAddProductAmount}
              handleDeleteDishAmount={handleDeleteProductAmount}
            />
          ))}
        </CartWrapper>
      ) : (
        <CartEmpty>
          <CartEmptyImage src={IMAGES.emptyCart} alt="empty" />
          <CartEmptyCaption>Cart is empty!</CartEmptyCaption>
          <CartEmptyText>
            Go back to the main page and add dishes to your cart!
          </CartEmptyText>
        </CartEmpty>
      )}
      <CartPriceWrapper>
        <PriceCaption>Total:</PriceCaption>
        <PriceNumber>{order.price} uah</PriceNumber>
      </CartPriceWrapper>
    </CartBox>
  );
};

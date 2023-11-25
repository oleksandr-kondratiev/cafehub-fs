import { Button } from "@components/button/button";

import { MenuImage } from "@components/menu-image/menu-image";

import { MenuProps } from "./menu.types";

import { MenuImagesWrapper } from "./menu.styled";
import {
  DishDescription,
  DishInfo,
  DishInfoWrapper,
  DishIngredients,
  DishIngredientsName,
  DishName,
  DishToOrder,
  DishToOrderInfo,
  PriceAndWeightText,
} from "../dishes-user.styled";

export const MenuPage = ({ menu }: MenuProps) => {
  return (
    <DishInfoWrapper>
      <MenuImagesWrapper>
        <MenuImage menu={menu} />
      </MenuImagesWrapper>
      <DishInfo>
        <DishName>{menu.name}</DishName>
        <DishDescription>{menu.description}</DishDescription>
        <DishIngredientsName>Contains:</DishIngredientsName>
        <DishIngredients>
          {menu.products.map((product) => `${product.name}. `)}
        </DishIngredients>
      </DishInfo>
      <DishToOrder>
        <DishToOrderInfo>
          <PriceAndWeightText>{menu.price}uah</PriceAndWeightText>
        </DishToOrderInfo>
        <Button isValid={true}>Order</Button>
      </DishToOrder>
    </DishInfoWrapper>
  );
};

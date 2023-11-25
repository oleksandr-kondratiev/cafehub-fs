import { Button } from "@components/button/button";

import { ProductProps } from "./product.types";

import { ProductImage } from "./product.styled";
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

export const ProductPage = ({ product }: ProductProps) => {
  return (
    <DishInfoWrapper>
      <ProductImage src={product.productImage} />
      <DishInfo>
        <DishName>{product.name}</DishName>
        <DishDescription>{product.description}</DishDescription>
        <DishIngredientsName>Ingredients:</DishIngredientsName>
        <DishIngredients>
          {product.ingredients.map((ingredient) =>
            !ingredient.isAllergen ? `${ingredient.name.toLowerCase()} ` : ""
          )}
        </DishIngredients>
        <DishIngredientsName>Allergens:</DishIngredientsName>
        <DishIngredients>
          {product.ingredients.map((ingredient) =>
            ingredient.isAllergen ? `${ingredient.name.toLowerCase()} ` : ""
          )}
        </DishIngredients>
      </DishInfo>
      <DishToOrder>
        <DishToOrderInfo>
          <PriceAndWeightText>{product.price}uah</PriceAndWeightText>
          <PriceAndWeightText>{product.weight}g</PriceAndWeightText>
        </DishToOrderInfo>
        <Button isValid={true}>Order</Button>
      </DishToOrder>
    </DishInfoWrapper>
  );
};

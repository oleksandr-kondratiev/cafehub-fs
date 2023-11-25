import { Ingredient } from "@components/ingredient/ingredient";
import { SelectComponent } from "@components/select/select";

import { ProductSelectProps } from "./product-select.types";

import {
  IngredientsWrapper,
  ProductSelectWrapper,
} from "./product-select.styled";

export const ProductSelect = ({
  label,
  ingredient,
  addIngredient,
  handleDeleteIngredients,
  handleAddIngredients,
}: ProductSelectProps) => {
  return (
    <ProductSelectWrapper>
      <label>{label}:</label>
      <IngredientsWrapper>
        {ingredient.map((ingredient) => (
          <Ingredient
            id={ingredient.id!}
            handleDeleteIngredients={handleDeleteIngredients}
            key={ingredient.id}
          >
            {ingredient.name}
          </Ingredient>
        ))}
      </IngredientsWrapper>
      <SelectComponent
        options={addIngredient}
        handleAddIngredients={handleAddIngredients}
      />
    </ProductSelectWrapper>
  );
};

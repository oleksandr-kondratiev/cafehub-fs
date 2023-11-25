import { StyledIngredient, StyledIngredientWrapper } from "./ingredient.styled";
import { IngredientProps } from "./ingredient.types";

export const Ingredient = ({
  children,
  handleDeleteIngredients,
  id,
}: IngredientProps) => {
  const handleClick = () => {
    handleDeleteIngredients(id);
  };

  return (
    <StyledIngredientWrapper id={id} onClick={handleClick}>
      <StyledIngredient>
        <p>{children}</p>
      </StyledIngredient>
    </StyledIngredientWrapper>
  );
};

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";
import { theme } from "@screens/app/theme";
import { useState } from "react";
import { AddIngredientWrapper, InputsWrapper } from "./add-ingredient.styled";
import { addIngredientProps } from "./add-ingredient.types";

export const AddIngredient = ({
  handleCreateIngredient,
}: addIngredientProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeInputValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === "ingredient") {
      handleCreateIngredient({
        name: inputValue,
        isAllergen: false,
      });
    }

    if (event.currentTarget.id === "allergen") {
      handleCreateIngredient({
        name: inputValue,
        isAllergen: true,
      });
    }
  };

  return (
    <AddIngredientWrapper>
      <label>Create new ingredient:</label>
      <InputsWrapper>
        <Input type="text" isWithoutLabel onChange={handleChangeInputValue} />
        <Button
          isValid
          background={`${theme.colors.grey}`}
          onClick={handleSubmit}
          id="ingredient"
        >
          Ingredient
        </Button>
        <Button
          isValid
          background={`${theme.colors.black}`}
          onClick={handleSubmit}
          id="allergen"
        >
          Allergen
        </Button>
      </InputsWrapper>
    </AddIngredientWrapper>
  );
};

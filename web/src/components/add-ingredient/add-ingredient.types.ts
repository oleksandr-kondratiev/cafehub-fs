import { IIngredient } from "typings/ingredient";

export interface addIngredientProps {
  handleCreateIngredient: (ingredient: IIngredient) => void;
}

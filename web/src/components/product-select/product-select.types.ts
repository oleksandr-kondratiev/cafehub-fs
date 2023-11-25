import { IIngredient } from "typings/ingredient";
import { IProduct } from "typings/product";

export interface ProductSelectProps {
  label: string;
  ingredient: IIngredient[] | IProduct[];
  addIngredient: IIngredient[] | IProduct[];

  handleDeleteIngredients: (id: string) => void;
  handleAddIngredients: (id: string) => void;
}

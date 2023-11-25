export interface IngredientProps {
  id: string;
  children: React.ReactNode;
  handleDeleteIngredients: (id: string) => void;
}

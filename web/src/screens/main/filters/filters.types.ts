export interface FiltersProps {
  isMenu: boolean;
  filters: {
    drinks: string[];
    food: string[];
  };

  handleFilter: (subcategory: string, isActive: boolean) => void;
}

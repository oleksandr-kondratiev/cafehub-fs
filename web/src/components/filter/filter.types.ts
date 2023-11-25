export interface FilterProps {
  caption: string;
  disabled?: boolean;
  filter: string[];

  handleFilter: (subcategory: string, isActive: boolean) => void;
}

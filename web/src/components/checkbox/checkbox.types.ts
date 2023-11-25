import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  name?: string;
  disabled?: boolean;

  subcategory?: string;
  caption?: string;

  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  handleIsActiveChange?: (id: string) => void;
  handleFilter?: (subcategory: string, isActive: boolean) => void;
}

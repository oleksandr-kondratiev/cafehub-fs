import { ChangeEventHandler } from "react";

export interface AddressProps {
  id?: string;
  isActive?: boolean;
  children?: React.ReactNode;

  name?: string;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  handleIsActiveChange: (id: string) => void;
}

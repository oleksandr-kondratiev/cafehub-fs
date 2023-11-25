import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  name?: string;
  color?: string;
  icon?: string;

  type: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;

  isToggleButton?: boolean;
  isWithoutLabel?: boolean;
  isEmpty?: boolean;

  onKeyDown?: (e: any) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface IInput {
  color?: string;
  isEmpty?: boolean;
}

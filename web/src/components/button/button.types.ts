export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  id?: string;

  background?: string;
  backgroundColor?: string;
  color?: string;

  isValid?: boolean;
  isIcon?: boolean;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IStyledButton {
  background?: string;
  color?: string;
  backgroundColor?: string;

  isValid?: boolean;
  isIcon?: boolean;
}

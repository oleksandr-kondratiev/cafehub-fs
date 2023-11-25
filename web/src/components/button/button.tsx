import { StyledButton } from "./button.styled";
import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  isValid,
  type,
  onClick,
  isIcon,
  background,
  color,
  id,
  backgroundColor,
}: ButtonProps) => {
  return (
    <StyledButton
      id={id}
      type={type}
      isValid={isValid}
      onClick={onClick}
      isIcon={isIcon}
      background={background}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
};

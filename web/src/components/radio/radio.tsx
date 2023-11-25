import { RadioProps } from "./radio.types";

import { StyledRadio, StyledActiveRadio } from "./radio.styled";

export const Radio = ({ isActive, handlerSetIsPending }: RadioProps) => {
  return (
    <StyledRadio onClick={handlerSetIsPending}>
      <StyledActiveRadio isActive={isActive} />
    </StyledRadio>
  );
};

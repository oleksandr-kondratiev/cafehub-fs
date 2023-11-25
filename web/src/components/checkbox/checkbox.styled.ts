import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  background-color: black;
  border: 3px solid black;

  :checked {
    accent-color: ${theme.colors.black};
  }
`;

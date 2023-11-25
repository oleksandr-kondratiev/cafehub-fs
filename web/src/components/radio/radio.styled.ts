import { theme } from "@screens/app/theme";
import styled from "styled-components";
import { IRadioIsActive } from "./radio.types";

export const StyledRadio = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  border: 2px solid ${theme.colors.black};

  padding: 3px;
`;

export const StyledActiveRadio = styled.div<IRadioIsActive>`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? theme.colors.black : "transparent"};
`;

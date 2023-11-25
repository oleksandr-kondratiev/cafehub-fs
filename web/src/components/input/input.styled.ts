import { theme } from "@screens/app/theme";
import styled from "styled-components";

import { IInput } from "./input.types";

export const InputWrapper = styled.input<IInput>`
  width: 100%;

  display: block;
  outline: none;
  background-color: transparent;
  border: 1px solid ${(props) => props.color};
  border-radius: 4px;

  padding: 15px 48px 15px 15px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${(props) => (props.color ? props.color : theme.colors.black)};

  &:focus ~ label {
    font-size: ${theme.size.verySmall};
    top: 0;
  }
`;

export const LabelStyled = styled.label<IInput>`
  pointer-events: none;
  position: absolute;
  z-index: ${theme.zIndex.max};

  top: ${(props) => (props.isEmpty ? "0" : "25px")};
  left: 10px;

  font-family: ${theme.font.regular};
  font-size: ${(props) =>
    props.isEmpty ? theme.size.verySmall : theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;

  padding: 0 5px;
  background-color: ${theme.colors.white};

  transition: 0.2s;
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    position: absolute;

    padding: 0 12px;

    background-color: transparent;
    border: none;

    right: 0;
  }
`;

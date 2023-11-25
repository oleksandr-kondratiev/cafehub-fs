import styled, { css } from "styled-components";

import { theme } from "./../../screens/app/theme";

import { IStyledButton } from "./button.types";

export const StyledButton = styled.button<IStyledButton>`
  ${(props) =>
    !props.isIcon
      ? css<IStyledButton>`
          cursor: pointer;
          border: none;

          padding: 16px 16px;
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          font-family: ${theme.font.medium};
          letter-spacing: 1.25px;
          text-transform: uppercase;
          font-size: ${theme.size.small};

          color: ${(props) =>
            props.color ? theme.colors.red : theme.colors.white};
          background-color: ${(props) =>
            props.isValid ? theme.colors.black : theme.colors.grey};
          background-color: ${(props) =>
            props.background ? props.background : ""};
          border-radius: 4px;

          transition-duration: 0.5s;

          ${(props) =>
            props.backgroundColor &&
            css`
              :hover {
                background-color: ${props.backgroundColor};
              }
            `}

          ${(props) =>
            props.background !== "transparent" &&
            css`
              :hover {
                -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
              }
            `}
        `
      : css`
          cursor: pointer;
          padding: 0;
          border: none;
          color: inherit;
          background-color: transparent;

          display: flex;
          justify-content: center;
          align-items: center;
        `}
`;

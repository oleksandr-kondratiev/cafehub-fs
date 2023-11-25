import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
  @keyframes animation {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }

  margin-top: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorCaption = styled.h2`
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: animation 0.5s alternate infinite;
`;

export const ErrorText = styled.p`
  font-size: ${theme.size.mediumSmall};
  display: inline-block;
  padding-right: 12px;
`;

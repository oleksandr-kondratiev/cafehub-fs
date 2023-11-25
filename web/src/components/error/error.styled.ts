import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.img`
  width: 200px;
  height: auto;
`;

export const ErrorText = styled.p`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  color: ${theme.colors.red};
`;

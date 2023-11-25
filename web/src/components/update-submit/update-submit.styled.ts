import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    text-transform: uppercase;

    font-family: ${theme.font.medium};
    color: ${theme.colors.purple};
  }
`;

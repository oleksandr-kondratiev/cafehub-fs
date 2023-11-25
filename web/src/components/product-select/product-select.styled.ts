import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const ProductSelectWrapper = styled.div`
  margin: 0 0 10px;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  align-content: space-between;

  label {
    margin: 5px 0;
    pointer-events: none;

    font-family: ${theme.font.medium};
    font-size: ${theme.size.normal};
    line-height: 24px;
    letter-spacing: 0.15px;

    padding: 0 5px;
    background-color: ${theme.colors.white};
  }
`;

export const IngredientsWrapper = styled.div`
  margin: 0 -4px;
`;

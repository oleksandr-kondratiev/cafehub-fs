import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const AddIngredientWrapper = styled.div`
  margin: 0 0 10px;
  position: relative;

  display: flex;
  flex-direction: column;

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

export const InputsWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

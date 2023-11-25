import { ICONS } from "@constants/icons";
import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const StyledIngredientWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0 4px 8px;

  padding: 6px 6px 6px 12px;
  border-radius: 16px;
  background-color: ${theme.colors.grey}40;
`;

export const StyledIngredient = styled.div`
  padding: 0 30px 0 0;

  background-image: url(${ICONS.closeCopy});
  background-repeat: no-repeat;
  background-position: center right;
`;

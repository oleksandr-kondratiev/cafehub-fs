import { ICONS } from "@constants/icons";
import { theme } from "@screens/app/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DishesWrapper = styled.div`
  margin: 25px 0;
`;

export const DishPageLink = styled(Link)`
  text-decoration: none;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};

  display: flex;

  ::before {
    content: url(${ICONS.chevronLeft});
    margin-right: 25px;
  }
`;

export const DishInfoWrapper = styled.div`
  margin: 36px 0 100px;

  display: flex;
  align-items: center;
`;

export const DishInfo = styled.div`
  padding: 0 30px;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DishName = styled.h2`
  margin-bottom: 48px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.title};
  line-height: 36px;
  text-align: center;

  color: ${theme.colors.black};
`;

export const DishDescription = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const DishIngredientsName = styled.h3`
  margin: 17px 0 8px;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const DishIngredients = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 24px;
  letter-spacing: 0.15px;
  word-spacing: 5px;

  color: ${theme.colors.black};
`;

export const DishToOrder = styled.div`
  width: 18%;

  display: flex;
  flex-direction: column;
`;

export const DishToOrderInfo = styled.div`
  margin-bottom: 40px;

  display: flex;
  justify-content: space-around;
`;

export const PriceAndWeightText = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.medium};
  line-height: 24px;
  letter-spacing: 0.18px;

  color: ${theme.colors.black};
`;

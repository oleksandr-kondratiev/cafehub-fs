import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartWrapper = styled.div`
  margin-bottom: 50px;
  padding-right: 20px;

  max-height: 468px;
  overflow: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto);
  grid-gap: 20px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 2px;
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 2px;
    border-radius: 10px;
    background-color: #dadada;
  }
`;

export const CartPriceWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${theme.colors.grey}80;

  display: flex;
  justify-content: space-between;
`;

export const PriceCaption = styled.p`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const PriceNumber = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.title};
  line-height: 36px;

  color: ${theme.colors.black};
`;

export const CartEmpty = styled.div`
  margin-bottom: 50px;
  padding-right: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartEmptyImage = styled.img`
  width: 70%;
  height: auto;
`;

export const CartEmptyCaption = styled.p`
  margin-bottom: 5px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const CartEmptyText = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};

  color: ${theme.colors.black};
`;

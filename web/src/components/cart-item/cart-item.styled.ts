import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr auto;
  grid-template-rows: 1fr;
  grid-gap: 16px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartImageWrapper = styled.div`
  overflow: hidden;

  border-radius: 10px;
  margin-bottom: 10px;

  width: 70px;
  height: 70px;
`;

export const CartImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const CartRemove = styled.button`
  cursor: pointer;

  border: none;
  background-color: transparent;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.verySmall};
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${theme.colors.purple};
`;

export const CartName = styled.p`
  margin: 4px 0 8px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 19px;

  color: ${theme.colors.black};
`;

export const CartDescription = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 19px;

  color: ${theme.colors.black};
`;

export const CartNumber = styled.div`
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartNum = styled.p`
  margin: 0 5px;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 16px;

  color: ${theme.colors.black};
`;

export const CartPrice = styled.p`
  text-align: center;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

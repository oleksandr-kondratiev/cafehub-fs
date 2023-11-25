import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const CartConfirmWrapper = styled.div`
  margin: 32px 0 100px;
  display: flex;
  flex-direction: column;
`;

export const CartConfirmCaption = styled.h2`
  margin-bottom: 48px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.title};
  line-height: 36px;

  color: ${theme.colors.black};
`;

export const CartConfirmButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
`;

export const TextButton = styled.button`
  cursor: pointer;

  border: none;
  background-color: transparent;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${theme.colors.purple};
`;

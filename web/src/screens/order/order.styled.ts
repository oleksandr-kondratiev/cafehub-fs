import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const ButtonsWrapper = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
`;

export const OrderWrapper = styled.div`
  margin: 24px 0;

  display: flex;
  flex-direction: column;

  background: ${theme.colors.white};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const OrderDate = styled.h2`
  padding: 16px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 24px;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

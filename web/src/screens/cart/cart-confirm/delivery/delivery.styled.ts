import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryItemBox = styled.div`
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
`;

export const DeliveryItemCaption = styled.p`
  margin: 0 0 8px 4px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 20px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const DeliveryTextarea = styled.textarea`
  resize: none;
  outline: none;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.grey};

  height: 94px;
  width: 100%;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

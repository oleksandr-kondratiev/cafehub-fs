import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const OrderItemWrapper = styled.div`
  cursor: pointer;

  padding: 16px 24px 16px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :nth-child(even) {
    border-top: 1px solid ${theme.colors.grey}40;
    border-bottom: 1px solid ${theme.colors.grey}40;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderId = styled.h3`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 20px;

  color: ${theme.colors.black};
`;

export const OrderTime = styled.p`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.verySmall};
  line-height: 16px;

  color: ${theme.colors.grey};
`;

export const OrderComment = styled.div`
  position: relative;

  overflow: hidden;
  white-space: nowrap;

  margin: 0 16px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 140%;

  color: ${theme.colors.black};

  ::after {
    content: "..";

    position: absolute;
    top: 0;
    right: 0;

    background-color: ${theme.colors.white};
  }
`;

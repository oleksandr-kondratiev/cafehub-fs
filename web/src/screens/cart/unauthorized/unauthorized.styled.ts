import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const UnauthorizedWrapper = styled.div`
  margin-top: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnauthorizedText = styled.h2`
  margin-bottom: 72px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.title};
  line-height: 36px;

  color: ${theme.colors.black};
`;

export const UnauthorizedLinks = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnauthorizedButton = styled(Link)`
  margin-bottom: 24px;

  width: 100%;
  padding: 16px 0;

  text-align: center;

  background: ${theme.colors.black};
  border-radius: 4px;

  text-decoration: none;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 16px;
  text-transform: uppercase;

  color: ${theme.colors.white};
`;

export const UnauthorizedLink = styled(Link)`
  text-decoration: none;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 16px;
  text-transform: uppercase;

  color: ${theme.colors.purple};
`;

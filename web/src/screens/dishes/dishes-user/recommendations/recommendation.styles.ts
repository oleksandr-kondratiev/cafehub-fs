import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const RecommendationProductWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
`;

export const RecommendationsWrapper = styled.div`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

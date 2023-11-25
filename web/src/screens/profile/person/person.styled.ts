import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2,
  p {
    font-weight: ${theme.font.regular};
    color: ${theme.colors.black};
  }

  h1 {
    text-align: center;
    margin-bottom: 4px;

    font-size: ${theme.size.title};
    line-height: 36px;
    letter-spacing: 0.15px;
  }

  p {
    margin-bottom: 4px;

    font-size: ${theme.size.verySmall};
    line-height: 16px;
    letter-spacing: 0.4px;
  }

  h2 {
    font-weight: ${theme.font.medium};
    font-size: ${theme.size.small};
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;

export const ImageWrapper = styled.img`
  margin-bottom: 16px;

  width: 222px;
  height: 222px;
  object-fit: cover;

  border-radius: 50%;
`;

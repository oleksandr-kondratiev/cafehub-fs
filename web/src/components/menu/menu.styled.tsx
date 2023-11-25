import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const MenuBox = styled.div`
  padding: 10px;
  width: 33.3%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const MenuWrapper = styled.div`
  padding: 16px;

  background: ${theme.colors.white};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MenuImagesWrapper = styled.div`
  margin-bottom: 18px;
  overflow: hidden;

  width: 100%;
  height: 264px;
`;

export const MenuDescription = styled.div`
  height: 120px;
  position: relative;

  h2 {
    font-family: ${theme.font.medium};
    font-size: ${theme.size.small};
    line-height: 140%;
    letter-spacing: 0.1px;

    color: ${theme.colors.black};
  }

  p {
    height: 80px;
    overflow: hidden;

    font-family: ${theme.font.regular};
    font-size: ${theme.size.small};
    line-height: 140%;
    letter-spacing: 0.25px;

    color: ${theme.colors.black};
  }

  ::after {
    content: "";

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 100%;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(9, 9, 121, 0) 50%,
      rgba(0, 212, 255, 0) 100%
    );
  }
`;

export const MenuToCart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuToCartInfo = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 16px;

  p {
    font-family: ${theme.font.regular};
    font-size: ${theme.size.medium};
    line-height: 24px;
    letter-spacing: 0.18px;

    color: ${theme.colors.black};
  }
`;

export const ManagerButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
`;

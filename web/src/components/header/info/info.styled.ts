import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "@screens/app/theme";

export const Image = styled.img`
  cursor: pointer;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;

export const HeaderLogo = styled(Link)`
  margin-right: 36px;
  text-decoration: none;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 50px;

    height: 40px;
    width: auto;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 326px;
`;

export const IconBox = styled.div`
  display: flex;
  margin-right: 40px;

  & > button {
    height: 24px;
    width: 24px;

    :not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const FuseSearchList = styled.ul`
  overflow: auto;
  list-style: none;

  position: absolute;
  max-height: 360px;
  width: 100%;

  margin: 0;
  padding: 0;

  background-color: ${theme.colors.white};

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

export const FuseSearchItem = styled.li`
  cursor: pointer;

  max-height: 120px;
  padding: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  :hover {
    background-color: ${theme.colors.grey}30;
  }
`;

export const FuseSearchProductImage = styled.img`
  width: 100px;
  height: 100px;

  object-fit: cover;
`;

export const FuseSearchMenuImagesWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const FuseSearchInfo = styled.div`
  margin-left: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const FuseSearchItemName = styled.h2`
  margin: 0 0 5px;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

export const FuseSearchItemText = styled.p`
  font-family: ${theme.font.regular};
  font-size: ${theme.size.verySmall};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const CartNumber = styled.p`
  position: absolute;
  right: -4px;
  top: -4px;

  height: 14px;
  width: 14px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${theme.font.medium};
  font-size: 8px;
  line-height: 8px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #ffffff;

  background-color: ${theme.colors.purple};
`;

export const ModalWrapper = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorImage = styled.img`
  margin-left: 16px;
  width: 30%;
  height: auto;
`;

export const AuthorInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 16px;
`;

export const AuthorInfoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 4px;
`;

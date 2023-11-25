import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "@screens/app/theme";

export const SettingsWrapper = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
`;

export const UnderButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const UnderButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${theme.colors.purple};
`;

export const OptionsWrapper = styled.div`
  width: 684px;
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 10px 0 30px;

  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.div`
  position: absolute;

  left: 0;
  bottom: 6px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${theme.colors.red};
`;

export const ConfirmWrapper = styled.div`
  margin-top: 75px;

  display: flex;
  flex-direction: row-reverse;

  a {
    width: 50%;

    display: flex;
    justify-content: center;
  }
  button {
    width: 50% !important;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  width: auto;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${theme.colors.purple};
`;

export const StyledMediumLink = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  text-decoration: none;

  margin: 17px 0 24px;

  text-transform: uppercase;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${theme.colors.purple};
`;

export const InputsWrapper = styled.div`
  margin: 0 auto;
  width: 306px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledLabel = styled.label`
  margin-bottom: 9px;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 20px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

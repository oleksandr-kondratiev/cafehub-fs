import styled from "styled-components";

import { ICONS } from "@constants/icons";

import { theme } from "@screens/app/theme";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  :hover > div {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;

  background: transparent;
  border: none;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${theme.colors.purple};

  display: flex;
  align-items: center;

  ::after {
    content: url(${ICONS.arrowDropDown});
    margin-left: 100px;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;

  width: 100%;
`;

export const DropdownItem = styled.button`
  display: block;
  padding: 16px;

  cursor: pointer;

  border: none;
  background-color: ${theme.colors.white};

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${theme.colors.purple};

  width: 100%;

  transition: 0.2s;

  :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey};
  }
`;

import { theme } from "@screens/app/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  overflow: hidden;

  width: 308px;
  height: 56px;

  bottom: 32px;
  left: 50%;
  margin-left: -154px;

  border-radius: 40px;
  background-color: ${theme.colors.black};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
`;

export const FooterElement = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 33%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

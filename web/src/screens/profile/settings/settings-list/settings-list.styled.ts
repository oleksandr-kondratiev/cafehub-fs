import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const ProfileListWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ListHeader = styled.div`
  margin: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 24px;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const UnderLinksWrapper = styled.div`
  button {
    width: 50%;
  }
`;

export const UnderLink = styled.button``;

import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const AddressItemWrapper = styled.div`
  padding: 16px;

  display: flex;

  border-bottom: 1px solid ${theme.colors.grey}80;
`;

export const AddressText = styled.p`
  margin-left: 16px;

  font-size: ${theme.size.small};
  line-height: 140%;

  letter-spacing: 0.25px;

  color: ${theme.colors.black};
`;

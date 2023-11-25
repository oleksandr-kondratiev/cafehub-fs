import { theme } from "@screens/app/theme";

import styled from "styled-components";

interface IFilterItemText {
  disabled?: boolean;
}

export const FilterWrapper = styled.div`
  width: 100%;
  margin: 24px 0;

  display: flex;
  flex-direction: column;
`;

export const FilterCaption = styled.h2`
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.grey}80;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const FilterItem = styled.div`
  margin: 14px 0;
  display: flex;
  align-items: center;
`;

export const FilterItemText = styled.p<IFilterItemText>`
  margin-left: 16px;

  color: ${(props) =>
    props.disabled ? theme.colors.grey : theme.colors.black};
`;

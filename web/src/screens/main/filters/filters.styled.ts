import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterCaption = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.grey}80;

  display: flex;
  align-items: center;
`;

export const FilterCaptionIcon = styled.img`
  height: 24px;
  width: auto;

  margin-right: 18px;
`;

export const FilterCaptionText = styled.div`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

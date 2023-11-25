import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const PrivacyText = styled.div`
  p {
    font-weight: ${theme.font.regular};
    font-size: ${theme.size.small};
    line-height: 16px;

    color: ${theme.colors.black};
  }
`;

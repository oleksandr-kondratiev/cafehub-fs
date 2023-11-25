import { Link } from "react-router-dom";
import styled from "styled-components";

import { ICONS } from "@constants/icons";
import { theme } from "@screens/app/theme";

export const BackLinkWrapper = styled(Link)`
  text-decoration: none;
  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};

  display: flex;

  ::before {
    content: url(${ICONS.chevronLeft});
    margin-right: 25px;
  }
`;

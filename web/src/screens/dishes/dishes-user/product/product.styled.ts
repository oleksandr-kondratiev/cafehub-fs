import { ICONS } from "@constants/icons";
import { theme } from "@screens/app/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin: 25px 0;
`;

export const ProductPageLink = styled(Link)`
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

export const ProductImage = styled.img`
  width: 308px;
  height: 308px;
  object-fit: cover;

  border-radius: 10%;
`;

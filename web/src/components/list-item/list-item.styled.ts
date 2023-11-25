import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const ListItemStyled = styled.li`
  padding: 16px 0;
  margin: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 20px;
  letter-spacing: 0.25px;

  color: ${theme.colors.black};

  border-top: 1px solid rgba(33, 33, 33, 0.08);
`;

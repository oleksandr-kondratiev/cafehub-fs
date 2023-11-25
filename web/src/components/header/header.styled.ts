import styled from "styled-components";

import { theme } from "@screens/app/theme";

export const HeaderBackground = styled.div`
  padding: 20px 0;
  background-color: ${theme.colors.black};
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

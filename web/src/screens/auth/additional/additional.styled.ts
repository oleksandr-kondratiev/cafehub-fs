import { theme } from "@screens/app/theme";

import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 10px 0;
  position: relative;
  padding: 0 0 30px;

  display: flex;
  flex-direction: column;

  label {
    margin: 5px 0;
    pointer-events: none;

    font-family: ${theme.font.medium};
    font-size: ${theme.size.normal};
    line-height: 24px;
    letter-spacing: 0.15px;

    padding: 0 5px;
    background-color: ${theme.colors.white};
  }
`;

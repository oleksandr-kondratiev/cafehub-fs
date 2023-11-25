import { theme } from "@screens/app/theme";
import styled from "styled-components";

interface IWrapper {
  isTouched?: boolean | undefined;
  values?: string;
}

export const InputWrapper = styled.div<IWrapper>`
  position: relative;
  padding: 10px 0 30px;

  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  padding: 100px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledError = styled.div`
  position: absolute;

  left: 0;
  bottom: 6px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${theme.colors.red};
`;

export const LinkWrapper = styled.div`
  margin: 10px 0 80px;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const UnderLink = styled.div`
  width: 100%;
  margin-top: 24px;

  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

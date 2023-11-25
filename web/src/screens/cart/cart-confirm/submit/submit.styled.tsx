import { styled, theme } from "@screens/app/theme";

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitInformationText = styled.h3`
  margin: 10px 0 24px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.medium};
  line-height: 24px;
  letter-spacing: 0.18px;

  color: ${theme.colors.black};
`;

export const SubmitCaption = styled.h4`
  margin-bottom: 6px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

export const SubmitText = styled.p`
  margin-bottom: 24px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${theme.colors.black};
`;

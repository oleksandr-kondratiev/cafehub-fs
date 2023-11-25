import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const ModalInformationWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ModalOrderSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionCaption = styled.div`
  margin-bottom: 24px;

  font-size: ${theme.size.medium};
  line-height: 24px;
  letter-spacing: 0.18px;

  color: ${theme.colors.black};
`;

export const SectionInfo = styled.div`
  margin-bottom: 24px;
`;

export const SectionInfoBold = styled.p`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${theme.colors.black};
`;

export const SectionInfoRegular = styled.p`
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${theme.colors.black};
`;

import { theme } from "@screens/app/theme";
import styled from "styled-components";

interface IColor {
  white?: boolean;
}

export const H1 = styled.h1<IColor>`
  font-size: ${theme.size.title};
  line-height: 36px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const H2 = styled.h2<IColor>`
  font-family: ${theme.font.regular};
  line-height: 24px;
  letter-spacing: 0.18px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const H3 = styled.h3<IColor>`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.mediumSmall};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const Subtitle = styled.p<IColor>`
  font-size: ${theme.size.normal};
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const SubtitleBold = styled.p<IColor>`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 20px;
  letter-spacing: 0.15px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const SubtitleSmall = styled.p<IColor>`
  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.1px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const BodyText = styled.p<IColor>`
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const Caption = styled.h3<IColor>`
  font-size: ${theme.size.verySmall};
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

export const ButtonText = styled.p<IColor>`
  text-transform: uppercase;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${(props) => (props.white ? theme.colors.white : theme.colors.black)};
`;

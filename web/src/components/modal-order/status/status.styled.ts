import styled, { css } from "styled-components";

import { theme } from "@screens/app/theme";

interface StyleStatusType {
  status?: boolean;
  statusLength?: number;
}

const lineStatusLength = (statusLength: number) => {
  switch (statusLength) {
    case 2:
      return css`
        width: 33.3%;
      `;
    case 3:
      return css`
        width: 66.6%;
      `;
    case 4:
      return css`
        width: 100%;
      `;
  }
};

export const StatusWrapper = styled.div`
  position: relative;

  width: 100%;
  padding: 48px 0;

  border-top: 1px solid ${theme.colors.grey}40;
`;

export const StatusItemsWrapper = styled.div`
  display: flex;
`;

export const StatusItemWrapper = styled.div`
  z-index: ${theme.zIndex.max};

  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatusCircle = styled.div<StyleStatusType>`
  margin-bottom: 5px;

  height: 12px;
  width: 12px;

  border-radius: 50%;
  border: 2px solid ${theme.colors.black};
  background-color: ${(props) =>
    props.status ? theme.colors.black : theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px;
    height: auto;
  }
`;

export const StatusText = styled.div`
  font-size: ${theme.size.verySmall};
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;

  color: ${theme.colors.black};

  background-color: ${theme.colors.white} !important;
`;

export const StatusLineWrapper = styled.div`
  position: absolute;

  display: flex;

  top: 51px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 75%;
  height: 6px;

  border: 2px solid ${theme.colors.black};
`;

export const StatusLine = styled.div<StyleStatusType>`
  ${props => lineStatusLength(props.statusLength!)}
`;

export const LineSegment = styled.div<StyleStatusType>`
  @keyframes animate-line {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  top: -2px;

  height: 3px;
  width: 100%;

  animation: animate-line 1.25s ease forwards;
  background-color: ${theme.colors.black};
`;

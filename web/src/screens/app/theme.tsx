import React from "react";
import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider,
} from "styled-components";

import medium from "@assets/fonts/Roboto-Medium.ttf";
import regular from "@assets/fonts/Roboto-Regular.ttf";

interface ITheme {
  children: React.ReactNode;
}

export const COLORS = {
  black: "#272727",
  white: "#FFFFFF",
  grey: "#B5B5B5",
  red: "#FF6347",
  purple: "#A020F0",
  blue: "#1E90FF",
};

export const SIZE = {
  title: "34px",
  medium: "24px",
  mediumSmall: "20px",
  normal: "16px",
  small: "14px",
  verySmall: "12px",
};

export const FONT = {
  regular: "regular",
  medium: "medium",
};

export const Z_INDEX = {
  minus: -1,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xxl: 9,
  xxxl: 10,
  max: 15,
};

export const theme = {
  colors: { ...COLORS },
  size: { ...SIZE },
  font: { ...FONT },
  zIndex: { ...Z_INDEX },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'regular';
  src: url(${regular});
}

@font-face {
  font-family: 'medium';
  src: url(${medium});
}

*{
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'regular';
}

html {    
  width:100vw;    
  overflow-x:hidden;
}
`;

export const Theme = ({ children }: ITheme) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

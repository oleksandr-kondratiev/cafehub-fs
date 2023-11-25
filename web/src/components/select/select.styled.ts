import { StylesConfig } from "react-select";

import { IMyOption, IsMultiType } from "./select.types";

import { theme } from "@screens/app/theme";
import { ICONS } from "@constants/icons";

export const customerStyles: StylesConfig<IMyOption, IsMultiType> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    borderColor: `${theme.colors.black}`,
    boxShadow: "none",
    "&:hover": {
      border: `1px solid ${theme.colors.grey}`,
    },
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused
        ? `${theme.colors.grey}30`
        : theme.colors.white,
      color: theme.colors.black,
    };
  },
  input: (styles) => ({
    ...styles,
    color: "white",
    backgroundImage: `url(${ICONS.arrowDropDown})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% center",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    padding: "15px",
    margin: "0",
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: "15px",
    margin: "0",
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "0",
  }),
  menu: (styles) => ({
    ...styles,
    margin: "0",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
};

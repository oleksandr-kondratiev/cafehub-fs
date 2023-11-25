import styled from "styled-components";
import DatePicker from "react-datepicker";

import { DatePickerIsDisabled } from "./choose-date.types";

import { theme } from "@screens/app/theme";

export const ChooseDateWrapper = styled.div`
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.normal};
  line-height: 24px;
  color: ${theme.colors.black};

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day {
    background-color: transparent;

    :hover {
      border-radius: 50%;
      background-color: ${theme.colors.purple}10;
    }
  }

  .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: ${theme.colors.purple} !important;

    :hover {
      background-color: ${theme.colors.purple} !important;
    }
  }

  .react-datepicker__day--today {
    border-radius: 50%;
    background-color: ${theme.colors.grey}30;
  }

  .react-datepicker__header {
    background-color: transparent;
    border-bottom: 1px solid ${theme.colors.grey}80;
  }

  .react-datepicker__day--keyboard-selected {
    color: ${theme.colors.black};
  }

  .react-datepicker__time-list {
    font-family: ${theme.font.regular};
    font-size: ${theme.size.verySmall};
    line-height: 24px;
    color: ${theme.colors.black};

    ::-webkit-scrollbar {
      width: 6px;
      height: 2px;
      background-color: inherit;
    }

    ::-webkit-scrollbar-thumb {
      width: 6px;
      height: 2px;
      border-radius: 10px;
      background-color: #dadada;
    }
  }

  .react-datepicker__time-list-item {
    margin: 5px !important;

    :hover {
      border-radius: 7px;
      background-color: ${theme.colors.purple}10 !important;
    }
  }

  .react-datepicker__time-list-item--selected {
    border-radius: 7px;
    background-color: ${theme.colors.purple} !important;

    :hover {
      background-color: ${theme.colors.purple} !important;
    }
  }
`;

export const ChooseDateCaption = styled.p`
  margin: 0 0 18px 4px;

  font-family: ${theme.font.medium};
  font-size: ${theme.size.normal};
  line-height: 20px;
  letter-spacing: 0.15px;

  color: ${theme.colors.black};
`;

export const ChooseDateCheckboxWrapper = styled.div``;

export const DateCheckboxWrapper = styled.div`
  margin-bottom: 10px;

  display: flex;
`;

export const DateCheckboxLabel = styled.label`
  margin-left: 5px;

  font-family: ${theme.font.regular};
  font-size: ${theme.size.small};
  line-height: 140%;
  letter-spacing: 0.25px;

  color: ${theme.colors.black};
`;

export const DateBox = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
`;

export const DateInputWrappers = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
`;

export const DatePickerInput = styled(DatePicker)<DatePickerIsDisabled>`
  display: ${(props) => (props.disabled ? "none" : "block")};
  width: 100%;
  padding: 14px;

  border: none;
  border-radius: 4px;
  outline: none;

  position: absolute;
  font-family: ${theme.font.medium};

  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);

  :focus {
    border: none;
  }
`;

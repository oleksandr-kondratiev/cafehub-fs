import { useState } from "react";

import { InputProps } from "./input.types";
import { ICONS } from "@constants/icons";

import { InputWrapper, LabelStyled, ToggleButton } from "./input.styled";

export const Input = (props: InputProps) => {
  const [visibility, setVisibility] = useState<string>(props.type);
  const onFocus = () => props.onFocus?.();

  const handleClick = () => {
    visibility === "password"
      ? setVisibility("text")
      : setVisibility("password");
  };

  if (props.isToggleButton) {
    return (
      <ToggleButton>
        <InputWrapper
          id={props.id}
          name={props.name}
          type={visibility}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onFocus={onFocus}
          onChange={props.onChange}
          color={props.color}
        />
        <button type="button">
          {props.icon === "search" ? (
            <img src={ICONS.search} alt="icon" />
          ) : (
            <img
              src={
                visibility === "password"
                  ? ICONS.visibility
                  : ICONS.visibilityOff
              }
              alt="icon"
              onClick={handleClick}
            />
          )}
        </button>
        {!props.isWithoutLabel && (
          <LabelStyled isEmpty={props.isEmpty}>{props.name}</LabelStyled>
        )}
      </ToggleButton>
    );
  }

  return (
    <>
      <InputWrapper
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onChange={props.onChange}
        color={props.color}
      />
      {!props.isWithoutLabel && (
        <LabelStyled isEmpty={props.isEmpty}>{props.name}</LabelStyled>
      )}
    </>
  );
};

import { useState } from "react";

import { CheckboxProps } from "./checkbox.types";

import { StyledCheckbox } from "./checkbox.styled";

export const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked || false);

  const handleCheckedButton = () => {
    setIsChecked(!isChecked);

    if (props.handleIsActiveChange && props.id) {
      props.handleIsActiveChange(props.id);
    }

    if (props.handleFilter && props.subcategory) {
      props.handleFilter(props.subcategory, !isChecked);
    }
  };

  return (
    <StyledCheckbox
      type="checkbox"
      id={props.id}
      name={props.name}
      onBlur={props.onBlur}
      onChange={handleCheckedButton}
      checked={isChecked}
      disabled={props.disabled}
    />
  );
};

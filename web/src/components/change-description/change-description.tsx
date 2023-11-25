import { Input } from "@components/input/input";

import { ChangeDescriptionProps } from "./change-description.types";

import { DishInputWrapper } from "@screens/dishes/dishes-manager/dishes-manager.styled";

export const ChangeDescription = ({
  placeholder,
  onChange,
}: ChangeDescriptionProps) => {
  return (
    <DishInputWrapper>
      <label>Description:</label>
      <Input
        placeholder={placeholder}
        type="text"
        isWithoutLabel
        onChange={onChange}
      />
    </DishInputWrapper>
  );
};

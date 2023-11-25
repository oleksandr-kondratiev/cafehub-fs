import Select, { GroupBase, OptionsOrGroups, SingleValue } from "react-select";

import { IMyOption, SelectProps } from "./select.types";

import { customerStyles } from "./select.styled";

export const SelectComponent = ({
  options,
  handleAddIngredients,
}: SelectProps) => {
  const ingredients:
    | OptionsOrGroups<IMyOption, GroupBase<IMyOption>>
    | undefined = options.map((option) => {
    return {
      id: option.id!,
      label: option.name,
      name: option.name,
    };
  });

  const handleChange = (value: SingleValue<IMyOption>) => {
    handleAddIngredients(value!.id);
  };

  return (
    <Select
      styles={customerStyles}
      onChange={handleChange}
      options={ingredients}
    />
  );
};

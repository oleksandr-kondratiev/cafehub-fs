import { Checkbox } from "@components/checkbox/checkbox";

import { FilterProps } from "./filter.types";

import {
  FilterWrapper,
  FilterCaption,
  FilterItem,
  FilterItemText,
} from "./filter.styled";

export const Filter = ({ caption, filter, handleFilter }: FilterProps) => {
  return (
    <FilterWrapper>
      <FilterCaption>{caption}</FilterCaption>
      {filter.map((filter: string) => (
        <FilterItem key={filter}>
          <Checkbox
            subcategory={filter}
            handleFilter={handleFilter}
            caption={caption}
          />
          <FilterItemText>{filter}</FilterItemText>
        </FilterItem>
      ))}
    </FilterWrapper>
  );
};

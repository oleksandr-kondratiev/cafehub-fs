import { Filter } from "@components/filter/filter";

import { ICONS } from "@constants/icons";
import { FiltersProps } from "./filters.types";

import {
  FilterCaption,
  FilterCaptionIcon,
  FilterCaptionText,
  FiltersWrapper,
} from "./filters.styled";

export const Filters = ({ filters, handleFilter }: FiltersProps) => {
  return (
    <FiltersWrapper className="filters">
      <FilterCaption>
        <FilterCaptionIcon src={ICONS.filterList} alt="filter" />
        <FilterCaptionText>Filters</FilterCaptionText>
      </FilterCaption>
      <Filter
        filter={filters.drinks}
        caption={"Drinks"}
        handleFilter={handleFilter}
      />
      <Filter
        filter={filters.food}
        caption={"Food"}
        handleFilter={handleFilter}
      />
    </FiltersWrapper>
  );
};

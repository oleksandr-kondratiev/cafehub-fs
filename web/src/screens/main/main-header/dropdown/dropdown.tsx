import { DropdownProps } from "./dropdown.types";

import {
  DropdownWrapper,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./dropdown.styled";

export const Dropdown = ({ sorting, handleSorting }: DropdownProps) => {
  const dropdowns = ["Sorting", "By name", "By price"];

  return (
    <DropdownWrapper>
      <DropdownButton>{sorting}</DropdownButton>
      <DropdownContent>
        {dropdowns.map((dropdown) => {
          return dropdown !== sorting ? (
            <DropdownItem onClick={handleSorting} key={dropdown} id={dropdown}>
              {dropdown}
            </DropdownItem>
          ) : null;
        })}
      </DropdownContent>
    </DropdownWrapper>
  );
};

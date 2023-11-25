import { Dropdown } from "./dropdown/dropdown";
import { HeaderButtons } from "./header-buttons/header-buttons";

import { MainHeaderProps } from "./main-header.types";

import { MainHeaderWrapper } from "./main-header.styled";

export const MainHeader = ({
  sorting,
  isMenu,
  handleChangeIsMenu,
  handleSorting,
}: MainHeaderProps) => {
  return (
    <MainHeaderWrapper className="main-header">
      <HeaderButtons handleChangeIsMenu={handleChangeIsMenu} isMenu={isMenu} />
      <Dropdown sorting={sorting} handleSorting={handleSorting} />
    </MainHeaderWrapper>
  );
};

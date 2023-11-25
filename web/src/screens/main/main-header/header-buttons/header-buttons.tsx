import { Button } from "@components/button/button";

import { MainButtonsWrapper } from "./header-buttons.styled";
import { HeaderButtonsProps } from "./header-buttons.types";

export const HeaderButtons = ({
  isMenu,
  handleChangeIsMenu,
}: HeaderButtonsProps) => {
  return (
    <MainButtonsWrapper>
      <Button onClick={handleChangeIsMenu} isValid={isMenu} id="menu">
        Menu
      </Button>
      <Button onClick={handleChangeIsMenu} isValid={!isMenu} id="product">
        Product
      </Button>
    </MainButtonsWrapper>
  );
};

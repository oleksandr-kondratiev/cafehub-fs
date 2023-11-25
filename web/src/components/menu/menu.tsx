import { Button } from "@components/button/button";
import { MenuImage } from "@components/menu-image/menu-image";

import { storageService } from "@services/storage-service";
import { MenuProps } from "./menu.types";
import { deleteMenu } from "./menu.api";

import { ROLES } from "@constants/roles";
import { theme } from "@screens/app/theme";

import {
  ManagerButtonsWrapper,
  MenuBox,
  MenuDescription,
  MenuImagesWrapper,
  MenuToCart,
  MenuToCartInfo,
  MenuWrapper,
} from "./menu.styled";

export const Menu = ({
  menu,
  handleNavigate,
  handleAddCartNumber,
  param,
}: MenuProps) => {
  const { name, description, price, id } = menu;
  const { role } = storageService.getUser();

  const handleClickWrapper = () => {
    handleNavigate(param, id!);
  };

  const handleClickButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (handleAddCartNumber !== undefined) {
      handleAddCartNumber(id!);
    }
  };

  const handleDelete = async () => {
    await deleteMenu(id!);
    window.location.reload();
  };

  return (
    <MenuBox>
      <MenuWrapper>
        <MenuImagesWrapper onClick={handleClickWrapper}>
          <MenuImage menu={menu} />
        </MenuImagesWrapper>
        <MenuDescription>
          <h2>{name}</h2>
          <p>{description}</p>
        </MenuDescription>
        <MenuToCart>
          <MenuToCartInfo>
            <p>{price}uah</p>
          </MenuToCartInfo>
          {role === ROLES.manager ? (
            <ManagerButtonsWrapper>
              <Button isValid onClick={handleClickWrapper}>
                Edit
              </Button>
              <Button
                color={theme.colors.red}
                background="#fce1e1"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </ManagerButtonsWrapper>
          ) : (
            <Button isValid onClick={handleClickButton}>
              To cart
            </Button>
          )}
        </MenuToCart>
      </MenuWrapper>
    </MenuBox>
  );
};

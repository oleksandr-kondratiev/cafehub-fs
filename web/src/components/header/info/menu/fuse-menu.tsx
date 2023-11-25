import { MenuImage } from "@components/menu-image/menu-image";

import { FuseMenuProps } from "./fuse-menu.types";

import {
  FuseSearchItem,
  FuseSearchItemText,
  FuseSearchItemName,
  FuseSearchInfo,
  FuseSearchMenuImagesWrapper,
} from "../info.styled";

export const FuseMenu = ({ menu, setTargetValue, navigate }: FuseMenuProps) => {
  const handleClick = () => {
    setTargetValue("");
    navigate(`/menu/${menu.id}`);
  };

  return (
    <FuseSearchItem key={menu.id} onClick={handleClick}>
      <FuseSearchMenuImagesWrapper>
        <MenuImage menu={menu} />
      </FuseSearchMenuImagesWrapper>
      <FuseSearchInfo>
        <FuseSearchItemName>{menu.name}</FuseSearchItemName>
        <FuseSearchItemText>{menu.description}</FuseSearchItemText>
      </FuseSearchInfo>
    </FuseSearchItem>
  );
};

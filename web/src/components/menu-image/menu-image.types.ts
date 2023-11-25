import { IMenu } from "typings/menu";

export interface MenuImageProps {
  menu: IMenu | Omit<IMenu, "created">;
}

export interface IMenuStyles {
  imagesNumber: number;
}

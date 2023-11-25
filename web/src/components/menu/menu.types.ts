import { IMenu } from "typings/menu";

export interface MenuProps {
  menu: IMenu;

  param: string;
  handleNavigate: (param: string, id: string) => void;
  handleAddCartNumber: (id: string) => void;
}

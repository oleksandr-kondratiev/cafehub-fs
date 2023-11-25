import { NavigateFunction } from "react-router-dom";

import { IMenu } from "typings/menu";

export interface FuseMenuProps {
  menu: IMenu;

  setTargetValue: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
}

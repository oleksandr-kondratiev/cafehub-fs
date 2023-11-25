import { IListItem } from "../../screens/profile/settings/settings-list/settings-list.types";

export interface IListItemProps {
  item: IListItem;
  children: JSX.Element;
  setModalContent: (children: JSX.Element, modalCaption: string) => void;
  setModalActive: () => void;
}

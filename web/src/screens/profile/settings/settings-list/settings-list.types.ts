export interface ISettingsList {
  caption: {
    text: string;
    isButton?: boolean;
  };
  items: IListItem[];
}

export interface IListItem {
  text: string;
  isButton?: boolean;
}

export interface SettingsListProps {
  list: ISettingsList;
}

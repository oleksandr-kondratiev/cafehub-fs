export interface MainHeaderProps {
  isMenu: boolean;
  sorting: string;

  handleChangeIsMenu: (target: React.MouseEvent<HTMLButtonElement>) => void;
  handleSorting: (target: React.MouseEvent<HTMLButtonElement>) => void;
}

import { Button } from "@components/button/button";

import { ICONS } from "@constants/icons";
import { IListItemProps } from "./list-item.types";

import { ListItemStyled } from "./list-item.styled";

export const ListItem = (props: IListItemProps) => {
  const { item, children, setModalContent, setModalActive } = props;

  const handleModal = () => {
    setModalContent(children, item.text);
    setModalActive();
  };

  return (
    <ListItemStyled>
      {item.text}
      {item.isButton && (
        <Button isIcon onClick={handleModal}>
          <img src={ICONS.chevronRight} alt="icon" />
        </Button>
      )}
    </ListItemStyled>
  );
};

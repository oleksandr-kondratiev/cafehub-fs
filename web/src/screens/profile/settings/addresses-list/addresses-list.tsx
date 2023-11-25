import { ModalWindow } from "@components/modal/modal";
import { CreateAddress } from "../create-address/create-address";
import { Button } from "@components/button/button";

import { IAddress } from "typings/address";
import { IAddressesList } from "./addresses-list.types";

import { UseSettingState } from "../settings.state";
import { ICONS } from "@constants/icons";

import {
  AddressItemStyled,
  List,
  ListHeader,
  ProfileListWrapper,
} from "./addresses-list.styled";

export const AddressesList = ({ items }: IAddressesList) => {
  const { setModalContent, handleModalToggler, isModalOpen, modalCaption } =
    UseSettingState();

  const handleModalAddress = () => {
    setModalContent(<CreateAddress />, "Add a new address");
    handleModalToggler();
  };

  return (
    <ProfileListWrapper>
      <ModalWindow
        isOpen={isModalOpen}
        onRequestClose={handleModalToggler}
        caption={modalCaption}
      >
        <CreateAddress />
      </ModalWindow>
      <ListHeader>
        Addresses
        <Button isIcon onClick={handleModalAddress}>
          <img src={ICONS.add} alt="icon" />
        </Button>
      </ListHeader>
      <List>
        {items.map((address: IAddress) => (
          <AddressItemStyled key={address.address} isActive={address.isActive}>
            {address.address}
          </AddressItemStyled>
        ))}
      </List>
    </ProfileListWrapper>
  );
};

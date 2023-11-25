import { ModalWindow } from "@components/modal/modal";
import { ListItem } from "../../../../components/list-item/list-item";

import { PrivacyPolicy } from "@screens/profile/settings/privacy/privacy";
import { ChangePassword } from "@screens/profile/settings/change-password/change-password";
import { DeleteAccount } from "@screens/profile/settings/delete-account/delete-account";

import { UseSettingState } from "../settings.state";

import { SettingsListProps } from "./settings-list.types";

import { List, ListHeader, ProfileListWrapper } from "./settings-list.styled";

export const SettingsList = (props: SettingsListProps) => {
  const {
    setModalContent,
    handleModalToggler,
    isModalOpen,
    modalCaption,
    children,
  } = UseSettingState();

  const modalChildren: Record<string, JSX.Element> = {
    "Privacy policy": <PrivacyPolicy />,
    "Change password": <ChangePassword />,
    "Delete account": <DeleteAccount />,
  };

  return (
    <ProfileListWrapper>
      <ModalWindow
        isOpen={isModalOpen}
        onRequestClose={handleModalToggler}
        caption={modalCaption}
      >
        {children}
      </ModalWindow>
      <ListHeader>{props.list.caption.text}</ListHeader>
      <List>
        {props.list.items.map((item) => (
          <ListItem
            item={item}
            setModalContent={setModalContent}
            setModalActive={handleModalToggler}
            key={item.text}
          >
            {modalChildren[item.text]}
          </ListItem>
        ))}
      </List>
    </ProfileListWrapper>
  );
};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SettingsList } from "@screens/profile/settings/settings-list/settings-list";
import { AddressesList } from "@screens/profile/settings/addresses-list/addresses-list";
import { ChangeProfile } from "@screens/profile/settings/change-profile/change-profile";
import { ModalWindow } from "@components/modal/modal";

import { fetchAddresses } from "@store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import { ROUTES } from "@constants/routes";

import {
  SettingsWrapper,
  UnderButton,
  UnderButtonsWrapper,
} from "./settings.styled";

export const Settings: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalToggler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.AddressesReducer);

  useEffect(() => {
    dispatch(fetchAddresses);
  }, []);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate(ROUTES.login);
  };

  const settingsList = {
    caption: {
      text: "Settings",
      isButton: false,
    },
    items: [
      {
        text: "Privacy policy",
        isButton: true,
      },
      {
        text: "Change password",
        isButton: true,
      },
      {
        text: "Delete account",
        isButton: true,
      },
    ],
  };

  return (
    <SettingsWrapper>
      <ModalWindow
        isOpen={isModalOpen}
        caption="Change profile"
        onRequestClose={handleModalToggler}
      >
        <ChangeProfile />
      </ModalWindow>
      <SettingsList list={settingsList} />
      <AddressesList items={addresses} />
      <UnderButtonsWrapper>
        <UnderButton type="button" onClick={handleModalToggler}>
          Edit
        </UnderButton>
        <UnderButton type="button" onClick={handleSignOut}>
          Sign out
        </UnderButton>
      </UnderButtonsWrapper>
    </SettingsWrapper>
  );
};

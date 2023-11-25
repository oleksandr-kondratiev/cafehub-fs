import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";

import { useAppDispatch } from "../../hooks/redux";

import { setCartNumbers } from "@store/reducers/ActionCreators";
import { cartStorageService } from "@services/cart-storage-service";

import { Notify } from "@components/notify/notify";
import { RouteApp } from "./app-route";
import { Theme } from "./theme";

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useAppDispatch();
  const { getStorageCartLength } = cartStorageService();

  const handleModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setCartNumbers(dispatch, getStorageCartLength());
  });

  return (
    <Theme>
      <Notify />
      <Modal isOpen={isOpen} onRequestClose={handleModal} />
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Theme>
  );
};

import { useEffect, useState } from "react";

import { OrderItems } from "./orders-items/order-items";
import { Unauthorized } from "@screens/cart/unauthorized/unauthorized";

import { storageService } from "@services/storage-service";
import { useOrderState } from "./order.state";

import { ROLES } from "@constants/roles";

import { Container } from "@styles/container.styled";
import { ButtonsWrapper } from "./order.styled";
import { OrderButton } from "./order-buttons/order-button";
import { ModalWindow } from "@components/modal/modal";

export const Order: React.FC = () => {
  const {
    modal,
    ordersByDates,
    handleFilterByStatus,
    handleModalToggler,
    handleSetModal,
    handleRemoveOrder,
    handleChangeOrder,
  } = useOrderState();

  const { role } = storageService.getUser();

  const [buttonStatus, setButtonStatus] = useState<string>();

  useEffect(() => {
    if (role === ROLES.user) {
      switch (buttonStatus) {
        case "complete":
          handleFilterByStatus("delivered");
          break;
        default:
          handleFilterByStatus("waiting");
      }
    }

    if (role === ROLES.manager) {
      switch (buttonStatus) {
        case "created":
          handleFilterByStatus("created");
          break;
        case "ready":
          handleFilterByStatus("ready");
          break;
        case "on way":
          handleFilterByStatus("on way");
          break;
        case "delivered":
          handleFilterByStatus("delivered");
          break;
      }
    }
  }, [buttonStatus]);

  const setButtonsState = (status: string) => {
    setButtonStatus(status);
  };

  const userButtons = ["waiting", "complete"];
  const managerButtons = ["created", "ready", "on way", "delivered"];

  return (
    <>
      {role ? (
        <Container maxWidth="684px">
          <ModalWindow
            isOpen={modal.isOpen}
            onRequestClose={handleModalToggler}
            caption={modal.caption}
          >
            {modal.children}
          </ModalWindow>
          <ButtonsWrapper>
            {role === ROLES.manager
              ? managerButtons.map((text: string) => (
                  <OrderButton
                    key={text}
                    text={text}
                    isValid={buttonStatus === text}
                    setButtonsState={setButtonsState}
                  />
                ))
              : userButtons.map((text: string) => (
                  <OrderButton
                    key={text}
                    text={text}
                    isValid={buttonStatus === text}
                    setButtonsState={setButtonsState}
                  />
                ))}
          </ButtonsWrapper>
          {ordersByDates &&
            ordersByDates.map((order) => (
              <OrderItems
                key={order.date}
                role={role}
                ordersByDate={order}
                handleSetModal={handleSetModal}
                handleRemoveOrder={handleRemoveOrder}
                handleChangeOrder={handleChangeOrder}
              />
            ))}
        </Container>
      ) : (
        <Unauthorized />
      )}
    </>
  );
};

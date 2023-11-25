import { Button } from "@components/button/button";
import { ROLES } from "@constants/roles";
import { storageService } from "@services/storage-service";
import { Information } from "./information/information";

import { ModalOrderWrapper, ButtonsWrapper } from "./modal-order.styled";
import { ModalOrderProps } from "./modal-order.types";
import { Status } from "./status/status";

export const ModalOrder = ({
  order,
  handleRemoveOrder,
  handleChangeOrder,
}: ModalOrderProps) => {
  const { role } = storageService.getUser();

  const onClickRemoveOrder = () => {
    handleRemoveOrder && handleRemoveOrder(order.id);
  };

  const onClickChangeOrder = () => {
    handleChangeOrder && handleChangeOrder(order.id, order.status);
  };

  return (
    <ModalOrderWrapper>
      <Information order={order} />
      <Status status={order.status} />
      {role === ROLES.manager && (
        <ButtonsWrapper>
          <Button isValid onClick={onClickChangeOrder}>
            Move to the next stage
          </Button>
          <Button isValid onClick={onClickRemoveOrder}>
            Remove order
          </Button>
        </ButtonsWrapper>
      )}
    </ModalOrderWrapper>
  );
};

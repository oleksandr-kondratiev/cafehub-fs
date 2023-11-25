import { Button } from "@components/button/button";

import { OrderButtonsProps } from "./order-button.types";

export const OrderButton = ({
  text,
  isValid,
  setButtonsState,
}: OrderButtonsProps) => {
  const handleClickOrderButton = () => {
    setButtonsState(text);
  };

  return (
    <Button isValid={isValid} onClick={handleClickOrderButton}>
      {text}
    </Button>
  );
};

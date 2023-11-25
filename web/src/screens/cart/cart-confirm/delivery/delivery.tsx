import { SelectComponent } from "@components/select/select";
import { ChooseDate } from "./choose-date/choose-date";

import { DeliveryProps } from "./delivery.types";

import {
  DeliveryWrapper,
  DeliveryItemBox,
  DeliveryItemCaption,
  DeliveryTextarea,
} from "./delivery.styled";

export const Delivery = ({
  addresses,
  handleSetAddress,
  handleSetComment,
  handleSetDeliveryDate,
}: DeliveryProps) => {
  const options = addresses.map((address) => ({
    id: address.id!,
    name: address.address!,
  }));

  const commentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleSetComment(event.currentTarget.value);
  };

  return (
    <DeliveryWrapper>
      <DeliveryItemBox>
        <DeliveryItemCaption>Choose address</DeliveryItemCaption>
        <SelectComponent
          options={options}
          handleAddIngredients={handleSetAddress}
        />
      </DeliveryItemBox>
      <ChooseDate handleSetDeliveryDate={handleSetDeliveryDate} />
      <DeliveryItemBox>
        <DeliveryItemCaption>Add comment</DeliveryItemCaption>
        <DeliveryTextarea onChange={commentHandler} />
      </DeliveryItemBox>
    </DeliveryWrapper>
  );
};

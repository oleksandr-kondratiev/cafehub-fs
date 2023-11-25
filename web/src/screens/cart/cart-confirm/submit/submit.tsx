import { format } from "date-fns";

import { storageService } from "@services/storage-service";

import { CartSubmitProps } from "./submit.types";

import {
  SubmitWrapper,
  SubmitInformationWrapper,
  SubmitInformationText,
  SubmitCaption,
  SubmitText,
} from "./submit.styled";

export const Submit = ({ order, address }: CartSubmitProps) => {
  const { deliveryDate, comment } = order;
  const { name, phone_number } = storageService.getUser();

  return (
    <SubmitWrapper>
      <SubmitInformationWrapper>
        <SubmitInformationText>User information</SubmitInformationText>
        <SubmitCaption>Name</SubmitCaption>
        <SubmitText>{name}</SubmitText>
        {phone_number && (
          <>
            <SubmitCaption>Phone</SubmitCaption>
            <SubmitText>{phone_number}</SubmitText>
          </>
        )}
        <SubmitCaption>Address</SubmitCaption>
        <SubmitText>{address.address}</SubmitText>
      </SubmitInformationWrapper>
      <SubmitInformationWrapper>
        <SubmitInformationText>Delivery information</SubmitInformationText>
        <SubmitCaption>Date</SubmitCaption>
        <SubmitText>{format(deliveryDate, "MM/dd/yyyy")}</SubmitText>
        <SubmitCaption>Time</SubmitCaption>
        <SubmitText>{format(deliveryDate, "hh:mm")}</SubmitText>
        {comment && (
          <>
            <SubmitCaption>Comment</SubmitCaption>
            <SubmitText>{comment}</SubmitText>
          </>
        )}
      </SubmitInformationWrapper>
    </SubmitWrapper>
  );
};

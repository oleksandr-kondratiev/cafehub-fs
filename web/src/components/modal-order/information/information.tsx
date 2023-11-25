import { format } from "date-fns";
import { ModalOrderProps } from "../modal-order.types";

import {
  ModalInformationWrapper,
  ModalOrderSection,
  SectionCaption,
  SectionInfo,
  SectionInfoBold,
  SectionInfoRegular,
} from "./information.styled";

export const Information = ({ order }: ModalOrderProps) => {
  const { user, address } = order;
  return (
    <ModalInformationWrapper>
      <ModalOrderSection>
        <SectionCaption>User information</SectionCaption>
        <SectionInfo>
          <SectionInfoBold>Name</SectionInfoBold>
          <SectionInfoRegular>{user?.name}</SectionInfoRegular>
        </SectionInfo>
        <SectionInfo>
          <SectionInfoBold>Phone</SectionInfoBold>
          <SectionInfoRegular>
            {user?.phone_number ? user?.phone_number : "no phone number"}
          </SectionInfoRegular>
        </SectionInfo>
        <SectionInfo>
          <SectionInfoBold>Address</SectionInfoBold>
          <SectionInfoRegular>{address?.address}</SectionInfoRegular>
        </SectionInfo>
      </ModalOrderSection>
      <ModalOrderSection>
        <SectionCaption>Delivery information</SectionCaption>
        <SectionInfo>
          <SectionInfoBold>Date</SectionInfoBold>
          <SectionInfoRegular>
            {format(new Date(order.deliveryDate), "MM/dd/yyyy")}
          </SectionInfoRegular>
        </SectionInfo>
      </ModalOrderSection>
    </ModalInformationWrapper>
  );
};

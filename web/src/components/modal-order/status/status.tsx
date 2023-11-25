import { useEffect, useState } from "react";

import { StatusProps } from "./status.types";

import {
  StatusWrapper,
  StatusItemWrapper,
  StatusText,
  StatusCircle,
  StatusItemsWrapper,
  StatusLineWrapper,
  StatusLine,
  LineSegment,
} from "./status.styled";
import { ICONS } from "@constants/icons";

export const Status = ({ status }: StatusProps) => {
  const [deliveryStatus, setDeliveryStatus] = useState<string[]>([]);

  useEffect(() => {
    setDeliveryStatus(statuses.slice(0, statuses.indexOf(status) + 1));
    console.log(statuses.slice(0, statuses.indexOf(status) + 1).length);
  }, []);

  const statuses = ["created", "ready", "on way", "delivered"];

  return (
    <StatusWrapper>
      <StatusItemsWrapper>
        {statuses.map((status) => (
          <StatusItemWrapper key={status}>
            <StatusCircle
              status={!!deliveryStatus.find((item) => item === status)}
            >
              {!!deliveryStatus.find((item) => item === status) && (
                <img src={ICONS.checkCircleTick} alt="checkCircle" />
              )}
            </StatusCircle>
            <StatusText>{status}</StatusText>
          </StatusItemWrapper>
        ))}
      </StatusItemsWrapper>
      <StatusLineWrapper>
        <StatusLine statusLength={deliveryStatus.length}>
          <LineSegment statusLength={deliveryStatus.length} />
        </StatusLine>
      </StatusLineWrapper>
    </StatusWrapper>
  );
};

import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { Radio } from "@components/radio/radio";
import { ChooseDateProps } from "./choose-date.types";

import {
  ChooseDateCaption,
  ChooseDateCheckboxWrapper,
  ChooseDateWrapper,
  DateCheckboxLabel,
  DateCheckboxWrapper,
  DatePickerInput,
  DateInputWrappers,
  DateBox,
} from "./choose-date.styled";

export const ChooseDate = ({ handleSetDeliveryDate }: ChooseDateProps) => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    handleSetDeliveryDate(startDate);
  }, [startDate]);

  const handlerSetIsPending = () => {
    setIsPending(!isPending);
  };

  const setDate = (date: Date) => {
    setStartDate(new Date(date as Date));
  };

  const setDateHours = (date: Date) => {
    const hours = (date as Date).getHours();
    const minutes = (date as Date).getMinutes();
    setStartDate(new Date(startDate.setHours(hours, minutes, 0)));
  };

  return (
    <ChooseDateWrapper>
      <ChooseDateCaption>Choose date and time of delivery</ChooseDateCaption>
      <ChooseDateCheckboxWrapper>
        <DateCheckboxWrapper>
          <Radio
            isActive={!isPending}
            handlerSetIsPending={handlerSetIsPending}
          />
          <DateCheckboxLabel>Right now</DateCheckboxLabel>
        </DateCheckboxWrapper>
        <DateCheckboxWrapper>
          <Radio
            isActive={isPending}
            handlerSetIsPending={handlerSetIsPending}
          />
          <DateCheckboxLabel>
            Choose date and time of delivery
          </DateCheckboxLabel>
        </DateCheckboxWrapper>
      </ChooseDateCheckboxWrapper>
      <DateBox>
        <DateInputWrappers>
          <DatePickerInput
            selected={startDate}
            disabled={!isPending}
            onChange={setDate}
          />
        </DateInputWrappers>
        <DateInputWrappers>
          <DatePickerInput
            selected={startDate}
            disabled={!isPending}
            onChange={setDateHours}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </DateInputWrappers>
      </DateBox>
    </ChooseDateWrapper>
  );
};

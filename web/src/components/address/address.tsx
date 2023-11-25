import { Checkbox } from "@components/checkbox/checkbox";
import { AddressItemWrapper, AddressText } from "./address.styled";
import { AddressProps } from "./address.types";

export const Address = (props: AddressProps) => {
  return (
    <AddressItemWrapper>
      <Checkbox
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        checked={props.isActive}
        handleIsActiveChange={props.handleIsActiveChange}
      />
      <AddressText>{props.children}</AddressText>
    </AddressItemWrapper>
  );
};

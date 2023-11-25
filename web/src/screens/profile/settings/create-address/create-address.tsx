import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Address } from "@components/address/address";
import { Button } from "@components/button/button";
import { Input } from "@components/input/input";

import { useCreateAddressState } from "./create-address.state";
import { theme } from "@screens/app/theme";

import {
  ConfirmWrapper,
  OptionsWrapper,
  StyledMediumLink,
} from "../settings.styled";
import { AddressesWrapper } from "./create-address.styled";
import { useAppSelector } from "../../../../hooks/redux";

export const CreateAddress: React.FC = () => {
  const { addresses } = useAppSelector((state) => state.AddressesReducer);

  const navigate = useNavigate();
  const handleReset = () => {
    navigate(0);
  };

  const {
    addressesArray,
    inputValue,
    setNewAddress,
    handleChange,
    createUserAddresses,
    firstSetAddress,
    handleIsActiveChange,
  } = useCreateAddressState();

  useEffect(() => {
    firstSetAddress(addresses);
  }, [addresses]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setNewAddress();
    }
  };

  return (
    <OptionsWrapper>
      <Input
        type={"text"}
        isWithoutLabel
        color={theme.colors.grey}
        placeholder="Address"
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleChange}
      />
      <AddressesWrapper>
        {addressesArray.map((address) => (
          <Address
            isActive={address.isActive}
            key={address.address}
            id={address.id}
            handleIsActiveChange={handleIsActiveChange}
          >
            {address.address}
          </Address>
        ))}
      </AddressesWrapper>
      <ConfirmWrapper>
        <Button isValid={true} onClick={createUserAddresses}>
          Create
        </Button>
        <StyledMediumLink onClick={handleReset}>Skip</StyledMediumLink>
      </ConfirmWrapper>
    </OptionsWrapper>
  );
};

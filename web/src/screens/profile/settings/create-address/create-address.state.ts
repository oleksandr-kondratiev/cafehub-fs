import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ApiAddresses } from "./create-address.api";
import { IAddress } from "typings/address";

interface IValues {
  inputValue: string;
  addressesArray: IAddress[];
}

export const useCreateAddressState = () => {
  const [state, setState] = useState<IValues>({
    inputValue: "",
    addressesArray: [],
  });

  const { UpdateAddresses } = ApiAddresses();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      inputValue: event.target.value,
    }));
  };

  const handleIsActiveChange = (id: string) => {
    const addresses = state.addressesArray.map((address) => {
      if (address.id === id) {
        return {
          ...address,
          isActive: !address.isActive,
        };
      } else {
        return address;
      }
    });

    setState((state) => ({
      ...state,
      addressesArray: addresses,
    }));
  };

  const setNewAddress = () => {
    setState((state) => ({
      ...state,
      addressesArray: [
        {
          isActive: true,
          address: state.inputValue,
        },
        ...state.addressesArray,
      ],
      inputValue: "",
    }));
  };

  const firstSetAddress = (addresses: IAddress[]) => {
    setState((state) => ({
      ...state,
      addressesArray: addresses,
    }));
  };

  const createUserAddresses = async () => {
    await UpdateAddresses(state.addressesArray);
    navigate(0);
  };

  return {
    ...state,
    handleChange,
    setNewAddress,
    createUserAddresses,
    firstSetAddress,
    handleIsActiveChange,
  };
};

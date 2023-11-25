import { apiServices } from "@services/api-service";
import { notifyError } from "@components/notify/notify.services";

import { URL } from "@constants/config";
import { IAddress } from "typings/address";

export const ApiAddresses = () => {
  const UpdateAddresses = async (
    values: Array<Omit<IAddress, "id"> | IAddress>
  ) => {
    try {
      await apiServices.postData(`${URL}/addresses/create`, values);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    UpdateAddresses,
  };
};

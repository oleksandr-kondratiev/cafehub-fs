import { useNavigate } from "react-router-dom";

import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";
import { storageService } from "@services/storage-service";

import { URL } from "@constants/config";

import { IUpdate } from "@screens/auth/additional/additional.types";

export const ApiChangeProfile = () => {
  const navigate = useNavigate();

  const changeProfile = async (values: IUpdate, id: string) => {
    try {
      const response = await apiServices.updateData(`${URL}/users/update`, {
        ...values,
        id,
      });

      storageService.setUser(response.data);
      navigate(0);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    changeProfile,
  };
};

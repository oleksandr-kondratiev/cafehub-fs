import { useNavigate } from "react-router-dom";

import { apiServices } from "@services/api-service";
import { storageService } from "@services/storage-service";
import { notifyError } from "@components/notify/notify.services";

import { IUpdate } from "./additional.types";

import { ROUTES } from "@constants/routes";
import { URL } from "@constants/config";

export const ApiAdditional = () => {
  const navigate = useNavigate();

  const UpdateAdditional = async (values: IUpdate, id: string) => {
    try {
      const response = await apiServices.updateData(`${URL}/users/update`, {
        ...values,
        id,
      });

      storageService.setUser(response.data);
      navigate(ROUTES.main);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    UpdateAdditional,
  };
};

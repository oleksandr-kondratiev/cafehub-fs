import { useNavigate } from "react-router-dom";

import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { URL } from "@constants/config";

import { IUpdatePassword } from "./change-password.types";

export const ApiChangePassword = () => {
  const navigate = useNavigate();

  const changePassword = async (values: IUpdatePassword, id: string) => {
    try {
      await apiServices.updateData(`${URL}/users/update/password`, {
        ...values,
        id,
      });
      navigate(0);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    changePassword,
  };
};

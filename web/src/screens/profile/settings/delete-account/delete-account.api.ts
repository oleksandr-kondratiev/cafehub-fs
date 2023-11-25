import { useNavigate } from "react-router-dom";

import { notifyError } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { ROUTES } from "@constants/routes";
import { URL } from "@constants/config";

export const ApiDeleteUser = () => {
  const navigate = useNavigate();

  const deleteUser = async (id: string) => {
    try {
      await apiServices.deleteData(`${URL}/users/delete/${id}`);
      navigate(ROUTES.login);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    deleteUser,
  };
};

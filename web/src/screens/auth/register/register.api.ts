import { useNavigate } from "react-router-dom";

import { apiServices } from "@services/api-service";
import { notifyError } from "@components/notify/notify.services";

import { IRegistration } from "./register.types";

import { ROUTES } from "@constants/routes";
import { URL } from "@constants/config";

export const ApiRegister = () => {
  const navigate = useNavigate();

  const registerUser = async (values: IRegistration) => {
    try {
      await apiServices.postData(`${URL}/auth/register`, values);
      navigate(ROUTES.login);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    registerUser,
  };
};

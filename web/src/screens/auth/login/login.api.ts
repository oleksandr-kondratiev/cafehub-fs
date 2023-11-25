import { useNavigate } from "react-router-dom";

import { notifyError } from "@components/notify/notify.services";

import { apiServices } from "@services/api-service";
import { storageService } from "@services/storage-service";

import { ILogin } from "./login.types";

import { ROUTES } from "@constants/routes";
import { URL } from "@constants/config";

export const ApiLogin = () => {
  const navigate = useNavigate();

  const loginUser = async (values: ILogin) => {
    try {
      const { data } = await apiServices.postData(`${URL}/auth/login`, values);
      const { id, email, name, phone_number, role, image, access_token } = data;

      const user = { id, email, name, phone_number, role, image };

      storageService.setToken(access_token);
      storageService.setUser(user);

      if (name && phone_number) {
        navigate(ROUTES.main);
      } else {
        navigate(ROUTES.additional);
      }
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    loginUser,
  };
};

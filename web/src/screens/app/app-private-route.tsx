import { storageService } from "@services/storage-service";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const access_token = storageService.getToken();

  return access_token ? <Outlet /> : <Navigate to="/login" />;
};

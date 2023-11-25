import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { CreateDish } from "@screens/create-dish/create-dish";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

import { storageService } from "@services/storage-service";

import { ROLES } from "@constants/roles";
import { ROUTES } from "@constants/routes";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const { role } = storageService.getUser();
  const page = location.split("/").pop();

  return (
    <>
      <Header navigate={navigate} />
      {role === ROLES.manager && page === ROUTES.main && (
        <CreateDish navigate={navigate} />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

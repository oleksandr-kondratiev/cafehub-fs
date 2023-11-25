import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DishesUser } from "./dishes-user/dishes-user";
import { DishesManager } from "./dishes-manager/dishes-manager";

import { useDishState } from "./dishes.state";
import { storageService } from "@services/storage-service";

import { ROLES } from "@constants/roles";

import { Container } from "@styles/container.styled";

export const DishPage: React.FC = () => {
  const { param, product, menu, recommendations, handleSetParam } =
    useDishState();

  const { role } = storageService.getUser();
  const location = useLocation().pathname;

  useEffect(() => {
    handleSetParam(location);
  }, [location]);

  return (
    <Container maxWidth="960px">
      {role === ROLES.user && (
        <DishesUser
          param={param}
          product={product}
          menu={menu}
          recommendations={recommendations}
          handleNavigate={handleSetParam}
        />
      )}

      {role === ROLES.manager && (
        <DishesManager param={param} product={product} menu={menu} />
      )}
    </Container>
  );
};

import { Recommendations } from "./recommendations/recommendation";
import { ProductPage } from "./product/product";
import { MenuPage } from "./menu/menu";

import { DishesUserProps } from "./dishes-user.types";
import { ROUTES } from "@constants/routes";

import { DishesWrapper, DishPageLink } from "./dishes-user.styled";

export const DishesUser = ({
  param,
  product,
  menu,
  recommendations,
  handleNavigate,
}: DishesUserProps) => {
  return (
    <DishesWrapper>
      <DishPageLink to={ROUTES.main}>Back</DishPageLink>
      {param === "product" && product && <ProductPage product={product} />}
      {param === "menu" && menu && <MenuPage menu={menu} />}
      <Recommendations
        recommendations={recommendations}
        handleNavigate={handleNavigate}
      />
    </DishesWrapper>
  );
};

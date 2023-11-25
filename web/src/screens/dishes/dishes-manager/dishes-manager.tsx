import { BackLink } from "@components/back-link/back-link";
import { MenuUpdate } from "./menu-update/menu-update";
import { ProductUpdate } from "./product-update/product-update";

import { DishesManagerProps } from "./dishes-manager.types";

import { DishesWrapper } from "../dishes.styled";

export const DishesManager = ({ param, product, menu }: DishesManagerProps) => {
  return (
    <DishesWrapper>
      <BackLink />
      {param === "product" && product && (
        <ProductUpdate inputProduct={product} />
      )}
      {param === "menu" && menu && <MenuUpdate inputMenu={menu} />}
    </DishesWrapper>
  );
};

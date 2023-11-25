import { useEffect } from "react";

import { useManagerState } from "../dishes-manager.state";

import { MenuImage } from "@components/menu-image/menu-image";
import { ChangeDescription } from "@components/change-description/change-description";
import { UpdateSubmit } from "@components/update-submit/update-submit";
import { ProductSelect } from "@components/product-select/product-select";

import { MenuUpdateProps } from "./menu-update.types";

import {
  MenuImagesWrapper,
  MenuIngredientsWrapper,
  ProductUpdateWrapper,
} from "./menu-update.styled";

import {
  DishChange,
  DishImageWrapper,
  DishUpdateDish,
} from "../dishes-manager.styled";

export const MenuUpdate = ({ inputMenu }: MenuUpdateProps) => {
  const {
    menuUpdate,
    addProducts,
    setInitialMenu,
    handleDeleteProducts,
    handleAddProducts,
    handleSetDescription,
    handleSubmitMenu,
  } = useManagerState();

  useEffect(() => {
    setInitialMenu(inputMenu);
  }, [inputMenu]);

  return (
    <ProductUpdateWrapper>
      {menuUpdate && (
        <DishChange>
          <DishImageWrapper>
            <MenuImagesWrapper>
              <MenuImage menu={menuUpdate} />
            </MenuImagesWrapper>
          </DishImageWrapper>
          <DishUpdateDish>
            <ChangeDescription
              placeholder={menuUpdate.description}
              onChange={handleSetDescription}
            />
            <MenuIngredientsWrapper>
              <ProductSelect
                label="Ingredients"
                ingredient={menuUpdate.products}
                addIngredient={addProducts}
                handleDeleteIngredients={handleDeleteProducts}
                handleAddIngredients={handleAddProducts}
              />
            </MenuIngredientsWrapper>
          </DishUpdateDish>
        </DishChange>
      )}
      <UpdateSubmit onSubmit={handleSubmitMenu} />
    </ProductUpdateWrapper>
  );
};

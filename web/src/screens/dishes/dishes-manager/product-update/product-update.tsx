import { useEffect } from "react";

import { useManagerState } from "../dishes-manager.state";

import { Input } from "@components/input/input";
import { ChangeDescription } from "@components/change-description/change-description";
import { AddIngredient } from "@components/add-ingredient/add-ingredient";
import { UpdateSubmit } from "@components/update-submit/update-submit";

import { ProductUpdateProps } from "./product-update.types";

import {
  ProductIngredientsWrapper,
  ProductUpdateWrapper,
} from "./product-update.styled";
import {
  DishChange,
  DishImage,
  DishImageWrapper,
  DishInputWrapper,
  DishUpdateDish,
} from "../dishes-manager.styled";
import { ProductSelect } from "@components/product-select/product-select";

export const ProductUpdate = ({ inputProduct }: ProductUpdateProps) => {
  const {
    productUpdate,
    addIngredients,
    setInitialProduct,
    handleDeleteIngredients,
    handleCreateIngredient,
    handleAddIngredients,
    handleSetDescription,
    handleSetPrice,
    handleSetWeight,
    handleSubmitProduct,
  } = useManagerState();

  useEffect(() => {
    setInitialProduct(inputProduct);
  }, [inputProduct]);

  return (
    <ProductUpdateWrapper>
      {productUpdate && (
        <DishChange>
          <DishImageWrapper>
            <DishImage src={productUpdate.productImage} alt="product" />
          </DishImageWrapper>
          <DishUpdateDish>
            <ChangeDescription
              placeholder={productUpdate.description}
              onChange={handleSetDescription}
            />
            <ProductIngredientsWrapper>
              <ProductSelect
                label="Ingredients"
                ingredient={productUpdate.ingredients.filter(
                  (ingredient) => !ingredient.isAllergen
                )}
                addIngredient={addIngredients.filter(
                  (ingredient) => !ingredient.isAllergen
                )}
                handleDeleteIngredients={handleDeleteIngredients}
                handleAddIngredients={handleAddIngredients}
              />
              <ProductSelect
                label="Allergens"
                ingredient={productUpdate.ingredients.filter(
                  (ingredient) => ingredient.isAllergen
                )}
                addIngredient={addIngredients.filter(
                  (ingredient) => ingredient.isAllergen
                )}
                handleDeleteIngredients={handleDeleteIngredients}
                handleAddIngredients={handleAddIngredients}
              />
            </ProductIngredientsWrapper>
            <AddIngredient handleCreateIngredient={handleCreateIngredient} />
            <ProductIngredientsWrapper>
              <DishInputWrapper>
                <label>Weight:</label>
                <Input
                  placeholder={productUpdate.weight.toString()}
                  type="text"
                  isWithoutLabel
                  onChange={handleSetWeight}
                />
              </DishInputWrapper>
              <DishInputWrapper>
                <label>Price:</label>
                <Input
                  placeholder={productUpdate.price.toString()}
                  type="text"
                  isWithoutLabel
                  onChange={handleSetPrice}
                />
              </DishInputWrapper>
            </ProductIngredientsWrapper>
          </DishUpdateDish>
        </DishChange>
      )}
      <UpdateSubmit onSubmit={handleSubmitProduct} />
    </ProductUpdateWrapper>
  );
};

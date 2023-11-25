import { Button } from "@components/button/button";

import { ProductProps } from "./product.types";
import { storageService } from "@services/storage-service";
import { deleteProduct } from "./product.api";

import { ROLES } from "@constants/roles";
import { theme } from "@screens/app/theme";

import {
  ProductWrapper,
  ProductImage,
  ProductDescription,
  ProductToCart,
  ProductToCartInfo,
  ProductBox,
  ManagerButtonsWrapper,
} from "./product.styled";

export const Product = ({
  props,
  handleNavigate,
  handleAddCartNumber,
  param,
}: ProductProps) => {
  const { productImage, name, description, price, weight, id } = props;
  const { role } = storageService.getUser();

  const handleClickWrapper = () => {
    handleNavigate(param, id!);
  };

  const handleClickButton = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (handleAddCartNumber !== undefined) {
      handleAddCartNumber(id!);
    }
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    await deleteProduct(id!);

    window.location.reload();
  };

  return (
    <ProductBox>
      <ProductWrapper onClick={handleClickWrapper}>
        <ProductImage src={productImage} alt="product" />
        <ProductDescription>
          <h2>{name}</h2>
          <p>{description}</p>
        </ProductDescription>
        <ProductToCart>
          <ProductToCartInfo>
            <p>{price}uah</p>
            <p>{weight}g</p>
          </ProductToCartInfo>
          {role === ROLES.manager ? (
            <ManagerButtonsWrapper>
              <Button isValid onClick={handleClickWrapper}>
                Edit
              </Button>
              <Button
                color={theme.colors.red}
                background="#fce1e1"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </ManagerButtonsWrapper>
          ) : (
            <Button
              isValid
              onClick={
                handleClickButton !== undefined
                  ? handleClickButton
                  : handleClickWrapper
              }
            >
              To cart
            </Button>
          )}
        </ProductToCart>
      </ProductWrapper>
    </ProductBox>
  );
};

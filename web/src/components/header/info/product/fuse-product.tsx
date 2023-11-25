import { FuseProductProps } from "./fuse-product.types";

import {
  FuseSearchItem,
  FuseSearchProductImage,
  FuseSearchItemText,
  FuseSearchItemName,
  FuseSearchInfo,
} from "../info.styled";

export const FuseProduct = ({
  id,
  productImage,
  name,
  description,
  setTargetValue,
  navigate,
}: FuseProductProps) => {
  const handleClick = () => {
    setTargetValue("");
    navigate(`/product/${id}`);
  };

  return (
    <FuseSearchItem key={id} onClick={handleClick}>
      <FuseSearchProductImage src={productImage} alt="product" />
      <FuseSearchInfo>
        <FuseSearchItemName>{name}</FuseSearchItemName>
        <FuseSearchItemText>{description}</FuseSearchItemText>
      </FuseSearchInfo>
    </FuseSearchItem>
  );
};

import { IProduct } from "typings/product";
import { MenuImageProps } from "./menu-image.types";

import { MenuImageWrapper } from "./menu-image.styled";

export const MenuImage = ({ menu }: MenuImageProps) => {
  return (
    <>
      {menu.products.length > 1 && (
        <MenuImageWrapper imagesNumber={menu.products.length}>
          {menu.products.map((product: IProduct) => (
            <img src={product.productImage} alt="product" key={product.id} />
          ))}
        </MenuImageWrapper>
      )}
    </>
  );
};

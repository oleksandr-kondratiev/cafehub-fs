import { Product } from "@components/product/product";
import { Loading } from "@components/loading/loading";
import { Menu } from "@components/menu/menu";

import { ProductsProps } from "./products.types";

import { ProductsWrapper } from "./products.styled";

export const Products = ({
  isMenu,
  products,
  menus,
  isLoading,
  handleNavigate,
  handleAddCartProduct,
  handleAddCartMenu,
}: ProductsProps) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProductsWrapper className="products">
      {isMenu
        ? menus.map((menu) => (
            <Menu
              key={menu.id}
              menu={menu}
              handleNavigate={handleNavigate}
              handleAddCartNumber={handleAddCartMenu}
              param="menu"
            />
          ))
        : products.map((product) => (
            <Product
              key={product.id}
              props={product}
              handleNavigate={handleNavigate}
              handleAddCartNumber={handleAddCartProduct}
              param="product"
            />
          ))}
    </ProductsWrapper>
  );
};

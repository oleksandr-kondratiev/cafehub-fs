import React from "react";
import { useNavigate } from "react-router-dom";

import { Filters } from "./filters/filters";
import { MainHeader } from "./main-header/main-header";
import { Products } from "./products/products";

import { useMainState } from "./main.state";

import { Container } from "../../styles/container.styled";
import { MainWrapper } from "./main.styled";

export const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (param: string, id: string) => {
    navigate(`/${param}/${id}`);
  };

  const {
    handleSorting,
    handleFilter,
    handleChangeIsMenu,
    handleAddCartProduct,
    handleAddCartMenu,
    isMenu,
    products,
    menus,
    isLoading,
    sorting,
    filters,
  } = useMainState();

  return (
    <Container maxWidth="1000px">
      <MainWrapper>
        <MainHeader
          handleSorting={handleSorting}
          handleChangeIsMenu={handleChangeIsMenu}
          isMenu={isMenu}
          sorting={sorting}
        />
        <Filters
          handleFilter={handleFilter}
          filters={filters}
          isMenu={isMenu}
        />
        <Products
          isMenu={isMenu}
          products={products}
          menus={menus}
          isLoading={isLoading}
          handleNavigate={handleNavigate}
          handleAddCartProduct={handleAddCartProduct}
          handleAddCartMenu={handleAddCartMenu}
        />
      </MainWrapper>
    </Container>
  );
};

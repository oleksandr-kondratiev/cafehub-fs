import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 210px) 1fr;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    "main-header main-header main-header"
    "filters products products"
    "filters products products";

  .main-header {
    grid-area: main-header;
  }
  .filters {
    grid-area: filters;
  }
  .products {
    grid-area: products;
  }
`;

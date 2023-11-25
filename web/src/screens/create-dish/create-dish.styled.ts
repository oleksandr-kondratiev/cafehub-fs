import styled, { css } from "styled-components";

import { theme } from "@screens/app/theme";

interface IProductCreate {
  isHalf?: boolean;
}

export const CreateDishContainer = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const BackLinkWrapper = styled.div`
  margin: 24px 0;
`;

export const CreateProductWrapper = styled.div`
  margin-bottom: 100px;

  display: grid;
  grid-template-columns: 308px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 24px;
`;

export const CreateProductSelectWrapper = styled.div<IProductCreate>`
  margin-bottom: 10px;

  ${(props) =>
    props.isHalf &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 20px;
    `}
`;

export const LeftSideWrapper = styled.div`
  margin-top: 10px;

  grid: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  button {
    margin-top: 24px;
  }
`;

export const ImageWrapper = styled.div`
  background-color: ${theme.colors.grey};

  width: 308px;
  height: 308px;

  object-fit: cover;
  border-radius: 10px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;

  display: flex;
  flex-direction: column;

  label {
    pointer-events: none;

    font-family: ${theme.font.medium};
    font-size: ${theme.size.normal};
    line-height: 24px;
    letter-spacing: 0.15px;

    padding: 0 5px;
    background-color: ${theme.colors.white};
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

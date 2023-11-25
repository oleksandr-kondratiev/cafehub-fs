import styled, { css } from "styled-components";

import { IMenuStyles } from "./menu-image.types";

const menuImagesPosition = (imagesNumber: number) => {
  switch (imagesNumber) {
    case 2:
      return css`
        width: 100%;
      `;
    case 3:
      return css`
        width: 50%;

        :nth-child(1) {
          width: 100%;
        }
      `;
    case 4:
      return css`
        width: 50%;
      `;
    case 5:
      return css`
        width: 33.3%;

        :nth-child(1) {
          width: 66.6%;
        }
      `;
    case 6:
      return css`
        width: 33.3%;
      `;
  }
};

export const MenuImageWrapper = styled.div<IMenuStyles>`
  overflow: hidden;
  pointer-events: none;
  user-select: none;

  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  img {
    height: 50%;
    object-fit: cover;
    border: 1px solid white;
    ${({ imagesNumber }) => menuImagesPosition(imagesNumber)};
  }
`;

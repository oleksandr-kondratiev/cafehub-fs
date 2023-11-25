import { theme } from "@screens/app/theme";
import styled from "styled-components";

export const DishChange = styled.div`
  width: 100%;
  margin: 25px 0 25px;

  display: grid;
  grid-template-columns: 308px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
`;

export const DishImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DishImage = styled.img`
  height: 308px;
  width: 308px;

  border-radius: 10%;
  object-fit: cover;
`;

export const DishUpdateDish = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const DishInputWrapper = styled.div`
  margin: 0 0 10px;
  position: relative;

  display: flex;
  flex-direction: column;

  label {
    margin: 5px 0;
    pointer-events: none;

    font-family: ${theme.font.medium};
    font-size: ${theme.size.normal};
    line-height: 24px;
    letter-spacing: 0.15px;

    padding: 0 5px;
    background-color: ${theme.colors.white};
  }
`;

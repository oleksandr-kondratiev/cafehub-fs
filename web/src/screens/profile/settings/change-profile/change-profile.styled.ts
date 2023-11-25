import styled from "styled-components";

import { theme } from "@screens/app/theme";
import { IMAGES } from "@constants/images";

interface IChangeProfile {
  image?: string;
}

export const ChangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChangeImageWrapper = styled.div<IChangeProfile>`
  border: 1px solid ${theme.colors.black};
  position: relative;

  width: 226px;
  height: 226px;

  border-radius: 50%;
  overflow: hidden;

  background-image: url(${(props) => props.image ? props.image : IMAGES.defaultUser});
  background-position: center center;
  background-size: cover;

  &:hover p {
    display: block;
  }
`;

export const InputFileWrapper = styled.p`
  display: none;

  width: 100%;
  height: 100%;

  position: absolute;
  bottom: 0;
  z-index: ${theme.zIndex.max};
`;

export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  z-index: -1;
`;

export const FileLabel = styled.label`
  cursor: pointer;

  width: 100%;
  height: 30%;

  position: absolute;
  bottom: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: ${theme.size.small};
  background-color: ${theme.colors.black};
`;
export const EmptyFileLabel = styled.label`
  cursor: pointer;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: transparent;
`;

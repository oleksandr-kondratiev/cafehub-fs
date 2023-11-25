import { theme } from "@screens/app/theme";
import styled from "styled-components";

interface IChangeProfile {
  image?: string | ArrayBuffer | null;
}

export const ImageWrapper = styled.div<IChangeProfile>`
  border: 1px solid ${theme.colors.black};
  position: relative;

  width: 308px;
  height: 308px;

  border-radius: 10%;
  overflow: hidden;

  background: ${(props) =>
    props.image ? `url(${props.image})` : theme.colors.grey};

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

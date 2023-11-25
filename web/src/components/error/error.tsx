import { ErrorProps } from "./error.types";

import { IMAGES } from "@constants/images";

import { ErrorWrapper, ErrorImage, ErrorText } from "./error.styled";

export const Error = (props: ErrorProps) => {
  return (
    <ErrorWrapper>
      <ErrorImage src={IMAGES.animatedError} alt="error" />
      <ErrorText>{props.children}</ErrorText>
    </ErrorWrapper>
  );
};

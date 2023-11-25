import { ErrorCaption, ErrorText, ErrorWrapper } from "./error.styled";

export const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorCaption>Error 404</ErrorCaption>
      <ErrorText>Page not found!</ErrorText>
    </ErrorWrapper>
  );
};

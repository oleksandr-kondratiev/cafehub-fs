import React from "react";

import { ROUTES } from "@constants/routes";

import { Container } from "@styles/container.styled";
import {
  UnauthorizedWrapper,
  UnauthorizedText,
  UnauthorizedLinks,
  UnauthorizedButton,
  UnauthorizedLink,
} from "./unauthorized.styled";

export const Unauthorized: React.FC = () => {
  return (
    <Container maxWidth="308px">
      <UnauthorizedWrapper>
        <UnauthorizedText>You are unauthorized</UnauthorizedText>
        <UnauthorizedLinks>
          <UnauthorizedButton to={ROUTES.login}>Log in</UnauthorizedButton>
          <UnauthorizedLink to={ROUTES.register}>Sign up</UnauthorizedLink>
        </UnauthorizedLinks>
      </UnauthorizedWrapper>
    </Container>
  );
};

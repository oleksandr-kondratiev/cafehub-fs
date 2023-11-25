import React from "react";

import { Person } from "./person/person";
import { Settings } from "./settings/settings";

import { Container } from "../../styles/container.styled";
import { ProfileWrapper } from "./profile.styled";

export const Profile: React.FC = () => {
  return (
    <Container maxWidth="920px">
      <ProfileWrapper>
        <Person />
        <Settings />
      </ProfileWrapper>
    </Container>
  );
};

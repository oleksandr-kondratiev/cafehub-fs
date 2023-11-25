import { Info } from "./info/info";
import { HeaderUser } from "./header-user/header-user";

import { HeaderProps } from "./header.types";

import { HeaderBackground, HeaderBox } from "./header.styled";
import { Container } from "@styles/container.styled";

export const Header = ({ navigate }: HeaderProps) => {
  return (
    <HeaderBackground>
      <Container maxWidth="1340px">
        <HeaderBox>
          <Info navigate={navigate} />
          <HeaderUser />
        </HeaderBox>
      </Container>
    </HeaderBackground>
  );
};

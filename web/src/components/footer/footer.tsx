import { ItemTypes } from "./footer.types";

import { ICONS } from "@constants/icons";
import { ROUTES } from "@constants/routes";

import { Caption } from "@styles/text.styled";
import { FooterElement, FooterWrapper } from "./footer.styled";

export const Footer = () => {
  const items: ItemTypes[] = ["main", "profile", "orders"];

  return (
    <FooterWrapper>
      {items.map((item) => (
        <FooterElement to={ROUTES[item]} key={item}>
          <img src={ICONS[item]} alt={item} />
          <Caption white>{item}</Caption>
        </FooterElement>
      ))}
    </FooterWrapper>
  );
};

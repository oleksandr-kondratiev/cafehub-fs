import { ROUTES } from "@constants/routes";
import { BackLinkWrapper } from "./back-link.styled";

export const BackLink = () => {
  return <BackLinkWrapper to={ROUTES.main}>Back</BackLinkWrapper>;
};

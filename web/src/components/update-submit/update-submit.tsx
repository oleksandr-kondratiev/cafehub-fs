import { Link } from "react-router-dom";

import { Button } from "@components/button/button";

import { ROUTES } from "@constants/routes";
import { UpdateSubmitProps } from "./update-submit.types";

import { ButtonsWrapper } from "./update-submit.styled";

export const UpdateSubmit = ({ onSubmit }: UpdateSubmitProps) => {
  return (
    <ButtonsWrapper>
      <Link to={ROUTES.main}>Skip</Link>
      <Button type="button" isValid={true} onClick={onSubmit}>
        Create
      </Button>
    </ButtonsWrapper>
  );
};

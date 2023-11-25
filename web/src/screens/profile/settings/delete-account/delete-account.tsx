import { useNavigate } from "react-router-dom";

import { Button } from "@components/button/button";

import { ApiDeleteUser } from "./delete-account.api";
import { storageService } from "@services/storage-service";

import { Subtitle, SubtitleBold } from "@styles/text.styled";
import {
  ConfirmWrapper,
  OptionsWrapper,
  StyledMediumLink,
} from "../settings.styled";

export const DeleteAccount: React.FC = () => {
  const navigate = useNavigate();
  const handleReset = () => {
    navigate(0);
  };

  const { id } = storageService.getUser();
  const { deleteUser } = ApiDeleteUser();

  const handleDelete = async () => {
    await deleteUser(id);
    localStorage.clear();
  };

  return (
    <OptionsWrapper>
      <SubtitleBold>Are you sure you want to delete your account?</SubtitleBold>
      <Subtitle>
        If your account is deleted, it will be impossible to restore it. To use
        the service without restrictions, you will have to create a new one.
      </Subtitle>
      <ConfirmWrapper>
        <Button type="submit" isValid={true} onClick={handleDelete}>
          Delete
        </Button>
        <StyledMediumLink onClick={handleReset}>Skip</StyledMediumLink>
      </ConfirmWrapper>
    </OptionsWrapper>
  );
};

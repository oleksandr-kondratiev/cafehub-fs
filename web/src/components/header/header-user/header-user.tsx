import { useNavigate } from "react-router-dom";

import { Button } from "@components/button/button";

import { storageService } from "@services/storage-service";

import { IMAGES } from "@constants/images";
import { ROUTES } from "@constants/routes";

import { Subtitle, SubtitleBold } from "@styles/text.styled";
import { HeaderUserBox, UserInfo, Image } from "./header-user.styled";

export const HeaderUser = () => {
  const { role, name, image } = storageService.getUser();
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate(ROUTES.profile);
  };

  return (
    <HeaderUserBox>
      <UserInfo>
        <Subtitle white>{role || "user"}</Subtitle>
        <SubtitleBold white>{name || "Anonymous"}</SubtitleBold>
      </UserInfo>
      <Button isIcon onClick={HandleClick}>
        <Image src={image || IMAGES.defaultUser} alt="avatar" />
      </Button>
    </HeaderUserBox>
  );
};

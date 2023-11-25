import { IMAGES } from "@constants/images";
import { storageService } from "@services/storage-service";
import React from "react";
import { ImageWrapper, InfoWrapper } from "./person.styled";

export const Person: React.FC = () => {
  const user = storageService.getUser();

  return (
    <InfoWrapper>
      <ImageWrapper src={user.image || IMAGES.defaultUser} alt="avatar" />
      <h1>{user.name || "Anonymous"}</h1>
      <p>{user.role || "user"}</p>
      <h2>{user.phone_number || "phone number"}</h2>
    </InfoWrapper>
  );
};

import React from "react";

import { LoadingWrapper, LoadingBox } from "./loading.styled";

export const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <LoadingBox>
        <div></div>
        <div></div>
        <div></div>
      </LoadingBox>
    </LoadingWrapper>
  );
};

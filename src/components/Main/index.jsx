import React from "react";
import { Gallery } from "./Gallery";

import { MainContainer } from "./styles";
import { Top } from "./Top";

export const Main = () => {
  return (
    <MainContainer>
      <Top />
      <Gallery />
    </MainContainer>
  );
};

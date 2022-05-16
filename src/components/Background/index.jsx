import React from "react";
import { BackgroundContainer, BackgroundImg } from "./styles";
import backgroundImg from "../../assets/background.png";

export const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundImg src={backgroundImg} alt="Imagem de fundo do site" />
    </BackgroundContainer>
  );
};

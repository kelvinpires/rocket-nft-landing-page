import React from "react";
import { ArrowBackImg, BackTop, FooterTopContainer } from "./styles";
import { Title, TitleStrong } from "../../../GlobalStyle";
import ArrowBlack from "../../../assets/arrow-black.svg";

export const FooterTop = () => {
  const backToTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterTopContainer>
      <Title style={{ fontSize: "4rem" }}>
        Rocket <TitleStrong>NFTs</TitleStrong>
      </Title>
      <BackTop onClick={backToTop}>
        <ArrowBackImg src={ArrowBlack} alt="Voltar para o topo do site." />
      </BackTop>
    </FooterTopContainer>
  );
};

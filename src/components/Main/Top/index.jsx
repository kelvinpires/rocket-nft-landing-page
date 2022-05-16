import React from "react";

import {
  BadgeImg,
  InfoContent,
  InfoContentAvatarImg,
  InfoContentAvatarP,
  InfoContentAvatarsContainer,
  InfoContentAvatarStrong,
  InfoContentText,
  MainTop,
} from "./styles";
import { Title } from "../../../GlobalStyle";

import { TitleStrong } from "../../../GlobalStyle";
import Badge from "../../../assets/badge.svg";

import GroupAvatars from "../../../assets/group-avarts.png";

export const Top = () => {
  return (
    <MainTop>
      <InfoContent>
        <InfoContentText>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </InfoContentText>
        <InfoContentAvatarsContainer>
          <InfoContentAvatarImg src={GroupAvatars} alt="Foto do artista" />
          <InfoContentAvatarP>
            <InfoContentAvatarStrong>+10</InfoContentAvatarStrong>
            Artistas selecionados
          </InfoContentAvatarP>
        </InfoContentAvatarsContainer>
      </InfoContent>
      <Title>
        Descubra a verdadeira arte digital e colecione diversas{" "}
        <TitleStrong>NFTs</TitleStrong>
      </Title>
      <BadgeImg src={Badge} alt="Explore a arte" />
    </MainTop>
  );
};

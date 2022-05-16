import React from "react";
import {
  NFTImg,
  NFTImgContainer,
  NFTInfoContainer,
  NFTInfoCreator,
  NFTInfoPrice,
  NFTItem,
  NFTName,
  NFTLinkArrow,
  SectionNFTsContainer,
  SectionPopularsContainer,
  Separator,
} from "./styles";
import { Title, TitleStrong } from "../../GlobalStyle";

import Astronauta1Img from "../../assets/astronauta-1.png";
import Astronauta2Img from "../../assets/astronauta-2.png";
import Astronauta3Img from "../../assets/astronauta-3.png";
import Astronauta4Img from "../../assets/astronauta-4.png";

import ArrowLink from "../../assets/arrow-white.svg";

export const SectionPopulars = () => {
  const NFTS = [
    {
      name: "Astrounauta 1",
      created_by: "Mayk Brito",
      price: "1.50 RKT",
      image: Astronauta1Img,
    },
    {
      name: "Astrounauta 2",
      created_by: "Jakeliny Gracielly",
      price: "2.0 RKT",
      image: Astronauta2Img,
    },
    {
      name: "Astrounauta 3",
      created_by: "João Inácio (Biro)",
      price: "3.75 RKT",
      image: Astronauta3Img,
    },
    {
      name: "Astrounauta 4",
      created_by: "Tamires Santos",
      price: "4.30 RKT",
      image: Astronauta4Img,
    },
  ];

  return (
    <SectionPopularsContainer>
      <Title style={{ fontSize: "4rem" }}>
        <TitleStrong>Populares</TitleStrong> da semana
      </Title>
      <SectionNFTsContainer>
        <Separator />
        {NFTS.map((NFT, index) => (
          <NFTItem key={index}>
            <NFTName href="/">
              {NFT.name} <NFTLinkArrow src={ArrowLink} />
            </NFTName>
            <NFTInfoContainer>
              <NFTInfoCreator>{NFT.created_by}</NFTInfoCreator>
              <NFTInfoPrice>{NFT.price}</NFTInfoPrice>
            </NFTInfoContainer>
            <NFTImgContainer>
              <NFTImg src={NFT.image} alt={NFT.name} />
            </NFTImgContainer>
          </NFTItem>
        ))}
      </SectionNFTsContainer>
    </SectionPopularsContainer>
  );
};

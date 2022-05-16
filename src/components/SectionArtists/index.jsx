import React from "react";
import { Title, TitleStrong } from "../../GlobalStyle";
import {
  AllArtistsLink,
  ArrowLink,
  ArtistCard,
  ArtistImageContainer,
  ArtistImg,
  ArtistInfo,
  ArtistName,
  ArtistNFTs,
  BestArtistsContainer,
  BestArtistsSection,
} from "./styles";

import Artist1 from "../../assets/artista-1.png";
import Artist2 from "../../assets/artista-2.png";
import Artist3 from "../../assets/artista-3.png";
import Artist4 from "../../assets/artista-4.png";
import Artist5 from "../../assets/artista-5.png";
import Artist6 from "../../assets/artista-6.png";

import ArrowOrange from "../../assets/arrow-orange.svg";

export const SectionArtists = () => {
  const ArtistsData = [
    {
      artist_name: "Mayk Brito",
      artist_photos_quantity: 80,
      artist_avatar: Artist1,
    },
    {
      artist_name: "Jakeliny G.",
      artist_photos_quantity: 99,
      artist_avatar: Artist2,
    },
    {
      artist_name: "João I. (Biro)",
      artist_photos_quantity: 50,
      artist_avatar: Artist3,
    },
    {
      artist_name: "Tamires Santos",
      artist_photos_quantity: 43,
      artist_avatar: Artist4,
    },
    {
      artist_name: "Ana Silva",
      artist_photos_quantity: 28,
      artist_avatar: Artist5,
    },
    {
      artist_name: "Diego F.",
      artist_photos_quantity: 20,
      artist_avatar: Artist6,
    },
  ];

  return (
    <BestArtistsSection>
      <Title style={{ fontSize: "4rem" }}>
        Melhores <TitleStrong>Artistas</TitleStrong>
      </Title>
      <BestArtistsContainer>
        {ArtistsData.map((artist) => (
          <ArtistCard>
            <ArtistImageContainer>
              <ArtistImg src={artist.artist_avatar} />
            </ArtistImageContainer>
            <ArtistInfo>
              <ArtistName>{artist.artist_name}</ArtistName>
              <ArtistNFTs>
                {artist.artist_photos_quantity} Fotografias
              </ArtistNFTs>
            </ArtistInfo>
          </ArtistCard>
        ))}
      </BestArtistsContainer>
      <AllArtistsLink href="/">
        Ver todos os artistas
        <ArrowLink src={ArrowOrange} />
      </AllArtistsLink>
    </BestArtistsSection>
  );
};

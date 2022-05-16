import React from "react";
import { GalleryContainer, GalleryItem, GalleryItemImg } from "./styles";

import Galeria1 from "../../../assets/galeria-1.png";
import Galeria2 from "../../../assets/galeria-2.png";
import Galeria3 from "../../../assets/galeria-3.png";
import Galeria4 from "../../../assets/galeria-4.png";
import Galeria5 from "../../../assets/galeria-5.png";
import Galeria6 from "../../../assets/galeria-6.png";
import Galeria7 from "../../../assets/galeria-7.png";
import Galeria8 from "../../../assets/galeria-8.png";

export const Gallery = () => {
  const photos = [
    Galeria1,
    Galeria2,
    Galeria3,
    Galeria4,
    Galeria5,
    Galeria6,
    Galeria7,
    Galeria8,
  ];

  return (
    <GalleryContainer>
      {photos.map((photo, index) => (
        <GalleryItem key={index}>
          <GalleryItemImg src={photo} />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

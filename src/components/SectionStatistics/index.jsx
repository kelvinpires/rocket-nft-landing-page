import React from "react";
import {
  SectionBannerDiv,
  SectionBannerImg,
  SectionContainer,
  SectionData,
  SectionDataDiv,
  SectionDataNum,
  SectionDataSubtitle,
  SectionInfoArticle,
  SectionInfoTextContent,
  SectionInfoTextP,
} from "./styles";
import { TitleStrong } from "../../GlobalStyle";

import Banner from "../../assets/banner.png";

export const SectionStatistics = () => {
  const data = [
    {
      subtitle: "Artes",
      value: "10K+",
    },
    {
      subtitle: "Vendas",
      value: "200+",
    },
    {
      subtitle: "Artistas",
      value: "20",
    },
  ];

  return (
    <SectionContainer>
      <SectionData>
        {data.map((item, index) => (
          <SectionDataDiv key={index}>
            <SectionDataNum>{item.value}</SectionDataNum>
            <SectionDataSubtitle>{item.subtitle}</SectionDataSubtitle>
          </SectionDataDiv>
        ))}
      </SectionData>
      <SectionInfoArticle>
        <SectionInfoTextContent>
          <SectionInfoTextP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id{" "}
            <TitleStrong>potenti diam</TitleStrong> et cras odio viverra. Amet,
            velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </SectionInfoTextP>
          <SectionInfoTextP style={{ textDecoration: "underline" }}>
            Lorem ipsum
          </SectionInfoTextP>
        </SectionInfoTextContent>
        <SectionInfoTextContent>
          <SectionInfoTextP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id{" "}
            <TitleStrong>potenti diam</TitleStrong> et cras odio viverra. Amet,
            velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </SectionInfoTextP>
          <SectionInfoTextP style={{ textDecoration: "underline" }}>
            Lorem ipsum
          </SectionInfoTextP>
        </SectionInfoTextContent>
      </SectionInfoArticle>
      <SectionBannerDiv>
        <SectionBannerImg
          src={Banner}
          alt="Imagem de um homem utilizando o óculos do futuro."
        />
      </SectionBannerDiv>
    </SectionContainer>
  );
};

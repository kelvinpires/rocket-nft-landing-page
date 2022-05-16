import styled from "styled-components";

export const SectionContainer = styled.section`
  display: grid;
  grid-template-areas:
    "data info"
    "data banner";
  grid-template-rows: 1fr auto;
  background-color: var(--body-background);
`;

export const SectionData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem 0;
  grid-area: data;
  padding: 13rem 8rem;
  border-right: 0.2rem solid var(--subtitle-color);
  border-bottom: 0.2rem solid var(--subtitle-color);
`;

export const SectionDataDiv = styled.div`
  text-align: center;
`;

export const SectionDataNum = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 0.3rem;
`;

export const SectionDataSubtitle = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--subtitle-color);
`;

export const SectionInfoArticle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 7rem 13rem 0 7rem;
  grid-area: info;
  gap: 10rem;
`;

export const SectionInfoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem 0;
`;

export const SectionInfoTextP = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  color: var(--text-color);
`;

export const SectionBannerDiv = styled.div`
  width: 100%;
  height: auto;
  grid-area: banner;
`;

export const SectionBannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

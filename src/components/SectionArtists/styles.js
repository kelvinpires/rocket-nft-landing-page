import styled from "styled-components";

export const BestArtistsSection = styled.section`
  padding: 0 2rem 10rem 2rem;
  background-color: var(--body-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem 0;
`;

export const BestArtistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

export const ArtistCard = styled.div`
  background-color: var(--card-color);
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2.5rem 3.2rem 2.5rem 3.2rem;
  &:nth-child(2) {
    background-color: var(--color-logo);
  }
  &:nth-child(2) p {
    color: var(--text-color);
  }
  &:nth-child(2) div {
    border-color: var(--text-color);
  }
`;

export const ArtistImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 0.4rem solid var(--color-logo);
`;

export const ArtistImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: var(--text-color);
  font-weight: 500;
  line-height: 0.2;
`;

export const ArtistNFTs = styled(ArtistName)`
  color: var(--color-logo);
`;

export const AllArtistsLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: var(--text-color);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowLink = styled.img``;

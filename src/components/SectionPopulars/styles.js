import styled from "styled-components";

export const SectionPopularsContainer = styled.section`
  background-color: var(--body-background);
  padding: 10rem 10rem 1rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionNFTsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: max-content;
  gap: 6rem 40rem;
  margin: 10rem 0;
  position: relative;
`;

export const NFTItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NFTName = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  &:hover {
    color: var(--color-logo);
  }
`;

export const NFTLinkArrow = styled.img``;

export const NFTInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NFTInfoCreator = styled.p`
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--subtitle-color);
`;

export const NFTInfoPrice = styled(NFTInfoCreator)`
  color: var(--color-logo);
  font-weight: 400;
`;

export const NFTImgContainer = styled.div`
  width: 35rem;
  height: 20rem;
  border: 0.2rem solid var(--color-logo);
`;

export const NFTImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Separator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;

  width: 0.3rem;
  background-color: var(--color-logo);
`;

import styled from "styled-components";

export const GalleryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem 1.6rem;
`;

export const GalleryItem = styled.div`
  width: 30rem;
  height: 20rem;
  border: 0.1rem solid var(--text-color);
`;

export const GalleryItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";

export const MainTop = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin: 3rem 8rem;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  max-width: 40rem;
`;

export const InfoContentText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: var(--text-color);
`;

export const InfoContentAvatarsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const InfoContentAvatarImg = styled.img``;

export const InfoContentAvatarStrong = styled.strong`
  display: flex;
  flex: 1;
`;

export const InfoContentAvatarP = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  color: var(--text-color);
`;

export const BadgeImg = styled.img``;

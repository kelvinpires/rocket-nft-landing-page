import styled from "styled-components";

export const FooterMiddleContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 0.2rem solid var(--subtitle-color);
  border-bottom: 0.2rem solid var(--subtitle-color);
  padding: 0 15rem 0 8rem;
`;

export const FooterNewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 6rem 6rem 4rem;
  border-right: 0.2rem solid var(--subtitle-color);
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 22rem;
  height: 4rem;
  padding: 0.5rem 2rem;
  background-color: var(--color-input);
  border: none;
  color: var(--text-color);
  font-size: 1.4rem;
  outline: none;

  &::placeholder {
    color: var(--subtitle-color);
  }
`;

export const ButtonSubmit = styled.button`
  width: 8rem;
  height: 5rem;
  background-color: var(--text-color);
  color: var(--color-input);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.6rem;
`;

export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 6rem 3rem 4rem;

  gap: 12rem;
`;

export const MapUl = styled.ul`
  list-style: none;
`;

export const MapLi = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

export const MapLink = styled.a`
  color: var(--subtitle-color);
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: var(--text-color);
  }
`;

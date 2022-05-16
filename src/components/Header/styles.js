import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 7rem 0 7rem;
`;

export const LogoDiv = styled.div``;

export const LogoTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: var(--text-color);
`;

export const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 6rem;
  list-style: none;
`;

export const MenuLi = styled.li`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
`;

export const MenuLink = styled.a`
  color: var(--text-color);
  text-decoration: none;

  &:hover {
    color: var(--color-logo);
  }
`;

export const HeaderButton = styled.button`
  padding: 1rem 2.2rem 1rem 1.4rem;
  background-color: var(--text-color);
  border: none;
  outline: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;
  border: 0.2rem solid var(--text-color);
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: var(--text-color);
  }
`;

export const HeaderButtonImg = styled.img``;

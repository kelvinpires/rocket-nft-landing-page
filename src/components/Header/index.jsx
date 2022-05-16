import React from "react";
import {
  HeaderButton,
  HeaderButtonImg,
  HeaderContainer,
  LogoDiv,
  LogoTitle,
  MenuLi,
  MenuLink,
  MenuUl,
} from "./styles";
import { TitleStrong } from "../../GlobalStyle";

import MetaMaskImg from "../../assets/logo_MetaMask.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <LogoTitle>
          Rocket <TitleStrong>NFTs</TitleStrong>
        </LogoTitle>
      </LogoDiv>
      <MenuUl>
        <MenuLi>
          <MenuLink href="/">Comprar NFT</MenuLink>
        </MenuLi>
        <MenuLi>
          <MenuLink href="/">Sobre</MenuLink>
        </MenuLi>
        <MenuLi>
          <MenuLink href="/">FAQ</MenuLink>
        </MenuLi>
      </MenuUl>
      <HeaderButton>
        <HeaderButtonImg
          src={MetaMaskImg}
          alt="Logo do meta mask para conectar sua carteira"
        />
        Conectar carteira
      </HeaderButton>
    </HeaderContainer>
  );
};

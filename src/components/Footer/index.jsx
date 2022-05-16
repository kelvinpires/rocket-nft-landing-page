import React from "react";
import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";
import { FooterTop } from "./FooterTop";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </FooterContainer>
  );
};

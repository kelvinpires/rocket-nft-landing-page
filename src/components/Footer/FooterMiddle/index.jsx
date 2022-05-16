import React from "react";
import {
  ButtonSubmit,
  FooterMiddleContainer,
  FooterNewsletterContainer,
  Input,
  MapContainer,
  MapLi,
  MapLink,
  MapUl,
  NewsletterForm,
} from "./styles";
import { Title, TitleStrong } from "../../../GlobalStyle";

export const FooterMiddle = () => {
  const WebMap = [
    {
      service_title: "Empresa",
      services: ["Sobre", "Serviços", "Time", "Carreira"],
    },
    {
      service_title: "Mapa",
      services: ["Galeria", "Populares", "Vendas", "Contato"],
    },
    {
      service_title: "Links",
      services: ["FAQs", "Termos", "Política", "Ajuda"],
    },
  ];

  return (
    <FooterMiddleContainer>
      <FooterNewsletterContainer>
        <Title style={{ fontSize: "3rem" }}>
          Fique por dentro de <TitleStrong>todas as novidades</TitleStrong>
        </Title>
        <NewsletterForm>
          <Input type="email" placeholder="nft@rocketseat.com.br" />
          <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </NewsletterForm>
      </FooterNewsletterContainer>
      <MapContainer>
        {WebMap.map((item, index) => (
          <MapUl key={index}>
            <MapLi>{item.service_title}</MapLi>
            {item.services.map((service) => (
              <MapLi>
                <MapLink href="/">{service}</MapLink>
              </MapLi>
            ))}
          </MapUl>
        ))}
      </MapContainer>
    </FooterMiddleContainer>
  );
};

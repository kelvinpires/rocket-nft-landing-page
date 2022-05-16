import React from "react";
import {
  FooterBottomContainer,
  NFTEmailText,
  SocialMediaImg,
  SocialMediaLi,
  SocialMediaLink,
  SocialMediaUl,
} from "./styles";

import InstagramImg from "../../../assets/instagram.svg";
import TwitterImg from "../../../assets/twitter.svg";
import YoutubeImg from "../../../assets/youtube.svg";
import EmailImg from "../../../assets/email.svg";

export const FooterBottom = () => {
  const socialMediaImgs = [
    {
      link: "https://instagram.com",
      image: InstagramImg,
    },
    {
      link: "https://youtube.com",
      image: YoutubeImg,
    },
    {
      link: "https://twitter.com",
      image: TwitterImg,
    },
    {
      link: "https://gmail.com",
      image: EmailImg,
    },
  ];

  return (
    <FooterBottomContainer>
      <NFTEmailText>www.rocketseat.com.br</NFTEmailText>
      <SocialMediaUl>
        {socialMediaImgs.map((item, index) => (
          <SocialMediaLi key={index}>
            <SocialMediaLink href={item.link}>
              <SocialMediaImg src={item.image} />
            </SocialMediaLink>
          </SocialMediaLi>
        ))}
      </SocialMediaUl>
    </FooterBottomContainer>
  );
};

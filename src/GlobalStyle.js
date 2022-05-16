import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --body-background: #0e0e0e;
        --color-logo: #ff5b50;
        --card-color: #252525;
        --text-color: #fff;
        --subtitle-color: #5a5757;
        --black-text: #000;
        --color-input: #0D0D0D;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--body-background);
    }


    html {
        font-size: 62.5%;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  color: var(--text-color);
`;

export const TitleStrong = styled.strong`
  color: var(--color-logo);
`;

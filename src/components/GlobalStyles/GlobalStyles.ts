import { createGlobalStyle } from 'styled-components';
import { fontFace } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${fontFace}

  :root {
    --primary-color: #000000;
    --title-color: #2085ce;
    --subtitle-color: #94bbc2;
    --text-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0000006e;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  body,
  input,
  button {
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--title-color);
    font-family: ModernWarfareFont, sans-serif;
  }
`;

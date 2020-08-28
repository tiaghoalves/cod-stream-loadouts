import { css } from 'styled-components';
import ModernWarfareFont from './../../fonts/ModernWarfareFont.ttf';

export const fontFace = css`
  @font-face {
    font-family: ModernWarfareFont;
    src: url(${ModernWarfareFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
`;
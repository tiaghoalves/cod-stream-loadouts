import styled, { css } from 'styled-components';

export const ItemSelectedEffect = css`
  :hover {
    background: #282828;
    cursor: pointer;
    text-shadow: 2px 2px 5px #000;
    transition: background, text-shadow ease 1s;
  }
`;

export const ItemSelected = {
  backgroundColor: '#282828',
  cursor: 'pointer',
  textShadow: '2px 2px 5px #000',
  borderTop: ' 1px solid #7AE1EA',
  transitionProps: ' background, text-shadow, border-top'
}
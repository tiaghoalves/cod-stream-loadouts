import styled, { css } from 'styled-components';
import listButttonImg from "./../../assets/images/global-nav-bg.png";

const ContainerIsConfig = css`
  margin: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
`;

export const Container = styled.div<{ isVisible: boolean, isConfig: boolean }> `
  ${props => props.isConfig ? ContainerIsConfig : ''}
  display: ${props => props.isVisible ? 'flex' : 'none'};
  position: relative;
  flex-direction: column;
  max-width: 600px;
  height: 650px;
  padding: 10px;
  background: #000000a6;
`;

export const HideButton = styled.button`
  top: 0;
  right: -20px;
  width: 20px;
  height: 50px;
  outline: none;
  cursor: pointer;

  color: #94bbc2;
  text-decoration: none;
  border: 1px solid #597985;
  text-shadow: 0px 0px 0px #97cde1;
  box-shadow: inset 0px 0px 5px #597985;

  background: url(${listButttonImg}) repeat;
  background-size: 2px;
  background-color: #242424;

  transition-property: text-shadow, background-color, border, color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  :hover {
    color: #79d9ff;
    border-left: 1px solid #7AE1EA;
    text-shadow: 0px 0px 10px #79d9ff;
    box-shadow: 0 0 4px #197AAD, inset 0px 0px 6px 1px #197AAD;
  }

  svg {
    margin: auto auto auto -2px;
    width: 20px;
  }
`;

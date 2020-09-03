import styled from "styled-components";
import listButttonImg from "./../../assets/images/global-nav-bg.png";

export const Container = styled.header<{ isConfig: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  ${props => props.isConfig ? 'margin: 0 auto;' : ''}
`;

export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  margin: 0px;
  width: 60px;
  height: 30px;
  outline: none;

  font-style: normal;
  font-weight: 400;
  line-height: 1.10;

  color: #94bbc2;
  border: 1px solid #597985;
  text-decoration: none;
  text-shadow: 0px 0px 0px #97cde1;
  box-shadow: inset 0px 0px 5px #597985;

  background: url(${listButttonImg}) repeat;
  background-size: 2px;
  background-color: #242424;

  transition-property: text-shadow, background-color, border, color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  :hover, :focus, :active {
    color: #79d9ff;
    border-top: 1px solid #7AE1EA;
    text-shadow: 0px 0px 10px #79d9ff;
    box-shadow: 0 0 4px #197AAD, inset 0px 0px 6px 1px #197AAD;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.h3`
  text-shadow: 0px 1px 5px #000;
  margin: 0 auto;
`;
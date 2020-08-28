import styled from 'styled-components';
import listButttonImg from "../../images/global-nav-bg.png";

export const Container = styled.div`
  ul {
    margin-top: 10px;
    list-style: none;
    justify-content: space-around;
    align-items: flex-start;
  }

  li {
    padding: 3px 0px;
    width: 250px;
  }
`;

export const ListButton = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: start;
  min-height: 16px;
  min-width: 140px;
  width: 100%;
  padding: 10px 15px;
  outline: none;

  color: #94bbc2;
  text-decoration: none;
  text-shadow: 0px 0px 0px #97cde1;
  box-shadow: inset 0px 0px 5px #597985;
  border: 1px solid #597985;

  transition-property: text-shadow, background-color, border, color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.10;
  
  background: url(${listButttonImg}) repeat;
  background-size: 2px;
  background-color: #242424;
  
  transform: perspective(1px) translateZ(0);

  :hover, .hvr-glow:focus, .hvr-glow:active {
    text-shadow: 0px 0px 10px #79d9ff;
    color: #79d9ff;
    border-top: 1px solid #7AE1EA;
    box-shadow: 0 0 8px #197AAD, inset 0px 0px 15px 2px #197AAD;
  }

  :before, :after {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    position: absolute;
    top: -1px;
    left: 0;
    transform: scaleX(0);
    
    background-image: linear-gradient(to right, rgba(250, 250, 250, 0.5), #ffffff 20%, #ffffff 80%, rgba(250, 250, 250, 0.5));
  }

  :before {
    color: #b6bec0;
    text-shadow: 0px 0px 10px #ffffff;
  }

  :after {
    bottom: -1px;
    top: initial;
    box-shadow: 0 0 14px #197AAD;
  }

  :before:hover, :after:hover {
    transition: all ease 1s;
    transform: scaleX(1);
  }
`;
import styled from 'styled-components';
import { ItemSelected, ItemSelectedEffect } from './../styles';

export const Utility = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) <{
  selected: boolean,
  isClicked: boolean
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 85px;
  outline: none;
  cursor: ${props => props.isClicked && props.selected ? ItemSelected.cursor : 'auto'};

  border-top: ${props => props.isClicked && props.selected ? ItemSelected.borderTop : 'none'};
  text-shadow: ${props => props.isClicked && props.selected ? ItemSelected.textShadow : 'none'};
  background-color: ${props => props.isClicked && props.selected ? ItemSelected.backgroundColor : '#1d1d1d'};
  margin: 5px;
  padding: 3px 10px;

  transition-property: ${props => props.isClicked && props.selected ? ItemSelected.transitionProps : 'text-shadow, background-color, border, color, box-shadow'};

  h4 {
    text-shadow: 0px 1px 4px #000;
  }

  ${props => props.selected ? ItemSelectedEffect : ''};
`;

export const UtilityImage = styled.div`
  background: transparent;
  margin: 0px;
  padding: 0px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 80px;
    height: 90%;
  }
`;

export const UtilityDetails = styled.div`
  background: transparent;
  margin: 0px;
  padding: 0px;
  width: 100%;

  span {
    width: fit-content;
    margin: 10px 5px;
  }

  span h5 h4 {
    flex-direction: column;
  }
`;
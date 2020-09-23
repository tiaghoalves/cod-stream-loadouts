import styled from 'styled-components';
import { ItemSelected, ItemSelectedEffect } from './../styles';

export const Weapon = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) <{
  selected: boolean,
  isClicked: boolean
}>`
  position: relative;
  width: 300px;
  height: 130px;
  outline: none;
  cursor: ${props => props.isClicked && props.selected ? ItemSelected.cursor : 'auto'};

  border-top: ${props => props.isClicked && props.selected ? ItemSelected.borderTop : 'none'};
  text-shadow: ${props => props.isClicked && props.selected ? ItemSelected.textShadow : 'none'};
  background-color: ${props => props.isClicked && props.selected ? ItemSelected.backgroundColor : '#1d1d1d'};
  margin: ${props => props.selected ? '5px 0px' : '5px'};
  padding: 3px 10px;

  transition-property: ${props => props.isClicked && props.selected ? ItemSelected.transitionProps : 'text-shadow, background-color, border, color, box-shadow'};
  transition-duration: 0.3s;
  transition-timing-function: ease;

  ${props => props.selected ? ItemSelectedEffect : ''}

  img {
    display: block;
    margin: auto;
  }

  span {
    margin: 3px 5px 0px;
  }
`;

export const WeaponHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  h4 {
    text-shadow: 0px 1px 4px #000;
  }
`;

export const WeaponAttachSlots = styled.div<{ hasAttach: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #000;
  background: ${props => props.hasAttach ? '#9e9e02' : ''};
`;

export const AttachSlotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  align-items: flex-end;
`;

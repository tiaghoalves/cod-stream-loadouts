import styled, { css } from 'styled-components';
import { ItemSelected, ItemSelectedEffect } from './../styles';

export const Perk = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) <{ selected: boolean }>`
  position: relative;
  width: 300px;
  height: 105px;
  display: flex;
  flex-direction: column;
  outline: none;

  background-color: #1d1d1d;
  margin: 5px;
  padding: 3px 10px;

  h4 {
    margin-bottom: 0px;
    text-shadow: 0px 1px 4px #000;
  }

  ${props => props.selected ? ItemSelectedEffect : ''}
`;

export const PerkImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: 5px;
`;

export const PerkImage = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 40px;
  }

  span {
    display: block;
    margin-top: 5px;
  }
`;
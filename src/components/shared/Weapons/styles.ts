import styled, { css } from 'styled-components';

// Weapon
const WeaponSelected = css`
  :hover, :active, :focus {
    background: #282828;
    cursor: pointer;
    text-shadow: 2px 2px 5px #000;
    border-top: 1px solid #7AE1EA;
    transition: background, text-shadow, border-top ease 1s;
  }
`;

export const Weapon = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) <{ selected: boolean }>`
  position: relative;
  width: 300px;
  height: 130px;
  outline: none;

  background-color: #1d1d1d;
  margin: ${props => props.selected ? '5px 0px' : '5px'};
  padding: 3px 10px;

  transition-property: text-shadow, background-color, border, color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  ${props => props.selected ? WeaponSelected : ''}

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

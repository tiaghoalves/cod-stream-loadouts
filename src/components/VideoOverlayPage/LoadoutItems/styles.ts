import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;

  h4, h5 {
    color: #fff;
    font-family: Roboto, sans-serif;
    margin: 5px 0 5px 5px;
  }

  span {
    display: block;
    color: #fff;
    font-size: 13px;
  }

  > div {
    margin: ${props => props.selected ? '5px 0px' : '5px'};
  }

  h4 {
    color: var(--subtitle-color);
  }

  ${props => props.selected ? '' : `
    > div:after,
    > div:before {
      content: '';
      position: absolute;
      width: 0px;
      height: 0px;
      background: transparent;
    }

    > div:after {
      right: 0;
      bottom: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid #1d1d1d;
      border-left: 5px solid transparent;
      border-bottom: 5px solid #1d1d1d;
    }

    > div:before {
      top: 0;
      left: 0;
      border-top: 10px solid #1d1d1d;
      border-right: 10px solid transparent;
      border-left: 5px solid #1d1d1d;
      border-bottom: 5px solid transparent;
    }
  `}
`;

// Weapons
export const Weapons = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) < { selected: boolean } > `
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

  ${props => props.selected ? `
    :hover, :active, :focus {
      background: #282828;
      cursor: pointer;
      text-shadow: 2px 2px 5px #000;
  
      border-top: 1px solid #7AE1EA;
      transition: background, text-shadow, border-top ease 1s;
    }
  ` : ''}

  img {
    display: block;
    margin: auto;
  }

  span {
    margin: 3px 5px 0px;
  }
`;

export const WeaponsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  h4 {
    text-shadow: 0px 1px 4px #000;
  }
`;

export const WeaponAttachSlots = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #000;
  background: #9e9e02;
`;

export const AttachSlotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  align-items: flex-end;
`;



// Perks
export const Perks = styled.div`
  position: relative;
  width: 300px;
  height: 105px;
  display: flex;
  flex-direction: column;

  background-color: #1d1d1d;
  margin: 5px;
  padding: 3px 10px;

  h4 {
    margin-bottom: 0px;
    text-shadow: 0px 1px 4px #000;
  }
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

// Utilities
export const Utilities = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 85px;

  background-color: #1d1d1d;
  margin: 5px;
  padding: 3px 10px;

  h4 {
    text-shadow: 0px 1px 4px #000;
  }
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
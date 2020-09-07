import styled, { css } from 'styled-components';

const UtilitySelected = css`
  :hover, :active, :focus {
    cursor: pointer;
    background: #282828;
    text-shadow: 2px 2px 5px #000;
    border-top: 1px solid #7AE1EA;
    transition: background, text-shadow, border-top ease 1s;
  }
`;

// Utilities
export const Utility = styled.div.attrs((props) => {
  return ({ tabIndex: props.tabIndex })
}) <{ selected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 85px;
  outline: none;

  background-color: #1d1d1d;
  margin: 5px;
  padding: 3px 10px;

  h4 {
    text-shadow: 0px 1px 4px #000;
  }

  ${props => props.selected ? UtilitySelected : ''};
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
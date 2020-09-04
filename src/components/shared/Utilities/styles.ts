import styled from 'styled-components';

// Utilities
export const Utility = styled.div`
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
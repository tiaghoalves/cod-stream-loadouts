import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  height: 50px;
  background: #1d1d1d;
  position: relative;
  margin: 5px 0px;
  padding: 0px 2px;

  img {
    height: 100%;
    width: 60px;
    padding: 5px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: 'Roboto', sans-serif;
    color: var(--subtitle-color);
    text-shadow: 0px 1px 4px #000;
  }

  span {
    display: block;
    font-size: 13px;
    color: var(--text-color);;
  }
`;

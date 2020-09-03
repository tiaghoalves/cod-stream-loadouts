import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 5px;
  width: 100%;
  height: 96%;
  background: #28282880;

  h3 {
    font-family: Roboto;
    color: var(--subtitle-color);
    text-shadow: 0px 1px 4px #000;
    margin: 5px auto 0px auto;
  }
`;

export const AttachmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 50px;
  background: #1d1d1d;
  position: relative;
  margin: 5px;
  padding: 0 5px;

  img {
    height: 100%;
    width: 60px;
    padding: 5px;
  }
`;

export const AttachmentDetail = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: Roboto;
    color: var(--subtitle-color);
    text-shadow: 0px 1px 4px #000;
  }

  span {
    display: block;
    font-size: 13px;
    color: var(--text-color);;
  }
`;

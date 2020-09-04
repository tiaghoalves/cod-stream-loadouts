import styled, { css } from 'styled-components';

const ContainerDivSelected = css`
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
`;

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0px;
  max-height: 100%;

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

  /* ${props => props.selected ? '' : ContainerDivSelected} */
`;

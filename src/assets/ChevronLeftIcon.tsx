import React from 'react';

interface IProps {
  fill?: string;
  width: string;
  height: string;
}

export default (props: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-chevron-left">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
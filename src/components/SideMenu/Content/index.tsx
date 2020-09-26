import React from 'react';

import { Title } from './styles';

interface IProps {
  title: string;
}

const SideMenuContent: React.FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

export default SideMenuContent;
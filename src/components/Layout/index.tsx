import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from './../Header';

import { Container, HideButton } from './styles';

interface RouteMatchType {
  index: string;
}

interface IProps {
  children?: React.ReactNode;
  hideButton?: React.ReactNode;
  isVisible?: boolean;
}

const Layout: React.FC<IProps> = ({ children, isVisible, hideButton }) => {
  let match = useRouteMatch<RouteMatchType>('/Loadout/:index');

  return (
    <>
      <Container isVisible={isVisible}>
        <Header match={match} />
        {children}
      </Container>
      {hideButton}
    </>
  );
}

export default Layout;
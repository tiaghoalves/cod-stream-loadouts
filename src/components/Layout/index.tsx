import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from './../Header';

import { Container } from './styles';

interface RouteMatchType {
  index: string;
}

interface IProps {
  children?: React.ReactNode;
  hideButton?: React.ReactNode;
  isVisible?: boolean;
  isConfig?: boolean;
}

const Layout: React.FC<IProps> = ({ children, isVisible = true, isConfig, hideButton }) => {
  let match = useRouteMatch<RouteMatchType>('/Loadout/:index');

  return (
    <>
      <Container isVisible={isVisible} isConfig={isConfig}>
        <Header match={match} isConfig={isConfig} />
        {children}
      </Container>
      {hideButton}
    </>
  );
}

export default Layout;
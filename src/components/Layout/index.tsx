import React, { ReactNode } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from './../Header';
import { Container } from './styles';

interface RouteMatchType {
  index: string;
}

interface IProps {
  children?: ReactNode;
  hideButton?: ReactNode;
  isVisible?: boolean;
  isConfig?: boolean;
}

const Layout: React.FC<IProps> = ({ children, isVisible = true, isConfig, hideButton }) => {
  let match = useRouteMatch<RouteMatchType>('/loadout/:index');

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
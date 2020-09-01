import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Header from './../Header';
import Loadouts from './../VideoOverlayPage/Loadouts';
import SelectedLoadout from '../VideoOverlayPage/SelectedLoadout';
import ChevronLeft from "./../../images/utils/chevron-left.svg";
import ChevronRight from "./../../images/utils/chevron-right.svg";

import { Container, HideButton } from './styles';

interface RouteMatchType {
  index: string;
}

const Layout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  let match = useRouteMatch<RouteMatchType>('/Loadout/:index');

  const handleHideButton = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Container isVisible={isVisible}>
        <Header match={match} />
        <Switch>
          <Route exact path="/">
            <Loadouts />
          </Route>
          <Route path="/Loadout/:index">
            <SelectedLoadout />
          </Route>
        </Switch>
      </Container>
      <HideButton onClick={handleHideButton}>
        {(isVisible) ? (<ChevronLeft />) : (<ChevronRight />)}
      </HideButton>
    </>
  );
}

export default Layout;
import React, { useState } from 'react';
// import { Switch, Route, useRouteMatch } from 'react-router';

import Header from './../Header';
import Loadouts from './../Loadouts';
import SelectedLoadout from './../SelectedLoadout';
import ChevronLeft from "./../../assets/ChevronLeftIcon";
import { ReactComponent as ChevronRight } from "./../../images/utils/chevron-right.svg";

import { Container, HideButton } from './styles';

interface RouteMatchType {
  index: string;
}

const Layout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  //let match = useRouteMatch<RouteMatchType>('/Loadout/:index');
  console.log('ChevronLeft => ', ChevronLeft);
  console.log('ChevronRight => ', ChevronRight);

  const handleHideButton = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Container isVisible={isVisible}>
        {/* <Header match={match} /> */}
        <Header match={null} />
        <Loadouts />
        {/* <Switch>
          <Route exact path="/">
            <Loadouts />
          </Route>
          <Route path="/Loadout/:index">
            <SelectedLoadout />
          </Route>
        </Switch> */}
      </Container>
      <HideButton onClick={handleHideButton}>
        {/* {(isVisible) ? (<ChevronLeft width="20" height="20" />) : (<ChevronRight width="20" height="20" />)} */}
        <ChevronLeft width="20" height="20" />
      </HideButton>
    </>
  );
}

export default Layout;
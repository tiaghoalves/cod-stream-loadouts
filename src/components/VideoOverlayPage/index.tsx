import React, { useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import Loadouts from './Loadouts';
import SelectedLoadout from './SelectedLoadout';

import ChevronLeft from "./../../assets/chevron-left.svg";
import ChevronRight from "./../../assets/chevron-right.svg";

import { HideButton } from './styles';

const VideoOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideButton = () => {
    setIsVisible(!isVisible);
  }

  const hideButton = (
    <HideButton onClick={handleHideButton}>
      {(isVisible) ? (<ChevronLeft />) : (<ChevronRight />)}
    </HideButton>
  );

  return (
    <Router
      initialEntries={["/", "/loadout/:index"]}
      initialIndex={0}
    >
      <GlobalStyle />
      <Layout isVisible={isVisible} hideButton={hideButton} >
        <Switch>
          <Route exact path="/">
            <Loadouts />
          </Route>
          <Route path="/loadout/:index">
            <SelectedLoadout />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default VideoOverlay;
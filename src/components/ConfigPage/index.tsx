import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import Loadouts from './Loadouts';
import SelectedLoadout from './SelectedLoadout';

const ConfigPage: React.FC = () => {
  return (
    <Router
      initialEntries={["/", "/loadout/:index"]}
      initialIndex={0}
    >
      <GlobalStyle />
      <Layout isConfig={true}>
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

export default ConfigPage;
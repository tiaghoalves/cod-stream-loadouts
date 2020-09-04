import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import Loadouts from './Loadouts';

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
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
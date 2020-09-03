import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import ConfigLoadouts from './ConfigLoadouts';

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
            <ConfigLoadouts />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
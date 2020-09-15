import React from 'react';
import { MemoryRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import RootPage from './RootPage';
import defaultLoadoutData from './../../assets/json/default_loadout.json';

const ConfigPage: React.FC = () => {
  const loadoutsData: LoadoutsData = JSON.parse(JSON.stringify(defaultLoadoutData));

  return (
    <Router
      initialEntries={["/", "/loadout/:index"]}
      initialIndex={0}
    >
      <GlobalStyle />
      <Layout isConfig={true}>
        <Switch>
          <Route exact path="/">
            <RootPage loadoutsData={loadoutsData} />
          </Route>
          <Route path="/loadout/:index">
            <RootPage loadoutsData={loadoutsData} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
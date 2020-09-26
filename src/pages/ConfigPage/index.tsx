import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../../components/GlobalStyles/GlobalStyles';
import Layout from './../../components/Layout';
import RoutesContainer from './Routes/Container';
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
            <RoutesContainer loadoutsData={loadoutsData} />
          </Route>
          <Route path="/loadout/:index">
            <RoutesContainer loadoutsData={loadoutsData} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
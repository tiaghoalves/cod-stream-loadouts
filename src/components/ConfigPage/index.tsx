import React, { useEffect } from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import Config from './Config';

const ConfigPage: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Config />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
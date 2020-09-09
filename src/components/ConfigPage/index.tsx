import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';
import Loadouts from './Loadouts';
import LoadoutsList from './LoadoutsList';
import LoadoutItems from './LoadoutItems';
import SideMenuItems from './SideMenuItems';
import Attachment from './../shared/Attachment';

import defaultLoadoutData from './../../assets/json/default_loadout.json';

const ConfigPage: React.FC = () => {
  const loadoutsData: LoadoutsData = JSON.parse(JSON.stringify(defaultLoadoutData));
  const { loadouts } = loadoutsData;
  const loadout = loadouts[0];

  return (
    <Router
      initialEntries={["/", "/loadout/:index"]}
      initialIndex={0}
    >
      <GlobalStyle />
      <Layout isConfig={true}>
        <Switch>
          <Route exact path="/">
            <Loadouts>
              <LoadoutsList namesList={loadouts.map((load) => load.name)} />
              <LoadoutItems loadout={loadout} />
            </Loadouts>
          </Route>
          <Route path="/loadout/:index">
            <Loadouts>
              <LoadoutItems selected={true} loadout={loadout} />
              <SideMenuItems>
                <Attachment />
              </SideMenuItems>
            </Loadouts>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default ConfigPage;
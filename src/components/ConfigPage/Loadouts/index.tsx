import React from 'react';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
import defaultLoadoutData from './../../../assets/json/default_loadout.json';

import { Container } from './styles';

const Loadouts: React.FC = () => {
  const loadoutsData: LoadoutsData = JSON.parse(JSON.stringify(defaultLoadoutData));
  const { loadouts } = loadoutsData;
  const loadout = loadouts[0];

  return (
    <Container>
      <LoadoutsList namesList={loadouts.map((load) => load.name)} />

      <LoadoutItems loadout={loadout} />
    </Container>
  );
}

export default Loadouts;
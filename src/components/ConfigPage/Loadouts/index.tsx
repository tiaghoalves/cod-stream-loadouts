import React from 'react';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
// import DefaultLoadout from './../../../assets/json/default_loadout.json';

import { Container } from './styles';

const Loadouts: React.FC = () => {
  function contextUpdate(context: any, delta: any) {
    // Considerar: Filtrar por alguma prop do context para usar quando for alterada (ex: 'language' => 'en' || 'pt-br')
    if (delta.includes('theme')) { }
  }

  // console.log('DefaultLoadout ->', DefaultLoadout);

  return (
    <Container>
      <LoadoutsList />

      <LoadoutItems />
    </Container>
  );
}

export default Loadouts;
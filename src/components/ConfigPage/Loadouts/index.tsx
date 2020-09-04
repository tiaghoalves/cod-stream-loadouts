import React, { useEffect } from 'react';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
import DefaultLoadout from './../../../assets/json/default_loadout.json';

import { Container } from './styles';

const Loadouts: React.FC = () => {
  function contextUpdate(context: any, delta: any) {
    // Considerar: Filtrar por alguma prop do context para usar quando for alterada (ex: 'language' => 'en' || 'pt-br')
    if (delta.includes('theme')) { }
  }

  let loadoutsNameList: string[];

  useEffect(() => {
    console.log('DefaultLoadout ->', DefaultLoadout);
    const loadoutsData: LoadoutsData = JSON.parse(JSON.stringify(DefaultLoadout));
    console.log('loadouts >', loadoutsData);

    loadoutsNameList = loadoutsData.loadouts.map((load) => load.name);
    console.log('loadoutsNameList >', loadoutsNameList);

  }, []);

  return (
    <Container>
      <LoadoutsList loadoutsNameList={loadoutsNameList} />

      <LoadoutItems />
    </Container>
  );
}

export default Loadouts;
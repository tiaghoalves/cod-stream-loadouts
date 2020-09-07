import React from "react";

import LoadoutItems from './../LoadoutItems';
// import Attachment from './../Attachment';
import defaultLoadoutData from './../../../assets/json/default_loadout.json';

import {
  Container
} from "./styles";

const SelectedLoadout: React.FC = () => {
  const loadoutsData: LoadoutsData = JSON.parse(JSON.stringify(defaultLoadoutData));
  const { loadouts } = loadoutsData;
  const loadout = loadouts[0];

  return (
    <Container>
      <LoadoutItems selected={true} loadout={loadout} />
      {/* <Attachment /> */}
    </Container>
  );
}

export default SelectedLoadout;
import React from "react";

import LoadoutItems from './../LoadoutItems';
import SideMenuItems from './../SideMenuItems';
import Attachment from './../../shared/Attachment';
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
      <SideMenuItems>
        <Attachment />
      </SideMenuItems>
    </Container>
  );
}

export default SelectedLoadout;
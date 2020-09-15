import React from 'react';
import { match } from 'react-router-dom';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
import SideMenuItems from './../SideMenuItems';
import Attachment from './../../shared/Attachment';

import { Container } from './styles';

interface RouteMatchType {
  index: string;
}

interface IProps {
  loadoutsData?: LoadoutsData;
  matchLoadouts?: match<RouteMatchType> | null;
  matchSelected?: match<RouteMatchType> | null;
}

const Loadouts: React.FC<IProps> = ({ loadoutsData, matchLoadouts, matchSelected }) => {
  let isSelected: boolean = (matchSelected && matchSelected.isExact) ? true : false;
  let isLoadouts: boolean = (matchLoadouts && matchLoadouts.isExact) ? true : false;
  const { loadouts } = loadoutsData;
  let namesList: string[];
  let loadout: Loadout;

  if (loadouts) {
    loadout = loadouts[0];
    namesList = loadouts.map((load) => load.name);
  }

  return (
    <Container>
      {
        isLoadouts && (
          <>
            <LoadoutsList namesList={namesList} />
            <LoadoutItems loadout={loadout} />
          </>
        )
      }
      {
        isSelected && (
          <>
            <LoadoutItems loadout={loadout} selected={true} />
            <SideMenuItems>
              <Attachment />
            </SideMenuItems>
          </>
        )
      }

      {/*

      {{
        if(matchSelected && matchSelected.isExact) {
          return (
            <>
              <LoadoutItems selected={true} loadout={loadout} />
              <SideMenuItems>
                <Attachment />
              </SideMenuItems>
            </>
          );
        }
      }} */}
    </Container>
  );
}

export default Loadouts;
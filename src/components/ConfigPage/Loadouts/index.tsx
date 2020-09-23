import React, { useEffect, useState } from 'react';
import { match } from 'react-router-dom';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
import SideMenu from '../../shared/SideMenu';
import { RouteMatchType } from './../Routes/Types';
import { Context, ContentType } from './../Context';

import { Container } from './styles';

interface IProps {
  loadoutsData: LoadoutsData;
  matchLoadouts?: match<RouteMatchType> | null;
  matchSelected?: match<RouteMatchType> | null;
}

interface SideMenuData {
  attachments?: Attachment[];
  perks?: Perk[];
  utility?: Utility;
}

const Loadouts: React.FC<IProps> = ({ loadoutsData, matchLoadouts, matchSelected }) => {
  const isSelected = (matchSelected && matchSelected.isExact) ? true : false;
  const isLoadouts = (matchLoadouts && matchLoadouts.isExact) ? true : false;
  const { loadouts } = loadoutsData;
  const loadout: Loadout = loadouts[0];
  const namesList: string[] = loadouts.map((load) => load.name);
  const defaultAttachments = loadout.loadoutItems.weapons[0].attachments;
  const [sideMenuData, setSideMenuData] = useState<SideMenuData>({
    attachments: defaultAttachments,
  });

  const handleSideMenuContent = (content: ContentType) => {
    const { weapon, perks, utility } = content;
    let sideMenuData: SideMenuData;

    if (weapon) {
      sideMenuData = { attachments: weapon.attachments };
    }

    if (perks) {
      sideMenuData = { perks: perks };
    }

    if (utility) {
      sideMenuData = { utility: utility };
    }

    setSideMenuData(sideMenuData);
  }

  return (
    <Container>
      {
        isLoadouts && (
          <>
            <LoadoutsList namesList={namesList} />
            <LoadoutItems loadout={loadout} />
          </>
        ) ||
        isSelected && (
          <Context.Provider value={{ handleSideMenuContent }}>
            <LoadoutItems loadout={loadout} selected={true} />
            <SideMenu data={sideMenuData} />
          </Context.Provider>
        )
      }
    </Container>
  );
}

export default Loadouts;
import React, { useState } from 'react';
import { match } from 'react-router-dom';

import LoadoutsList from './../LoadoutsList';
import LoadoutItems from './../LoadoutItems';
import SideMenu from './../../../components/SideMenu';
import { RouteMatchType } from './../Routes/Types';
import { Context, MenuContentType } from './../Context';

import { Container } from './styles';

interface IProps {
  loadouts?: Loadout[];
  matchLoadouts?: match<RouteMatchType> | null;
  matchSelected?: match<RouteMatchType> | null;
}

interface SideMenuData {
  attachments?: Attachment[];
  perks?: Perk[];
  utility?: Utility;
}

const Loadouts: React.FC<IProps> = ({ loadouts, matchLoadouts, matchSelected }) => {
  const isSelected = (matchSelected && matchSelected.isExact) ? true : false;
  const isLoadouts = (matchLoadouts && matchLoadouts.isExact) ? true : false;
  const loadout: Loadout = loadouts[0];
  const defaultPrimaryAttachs: Attachment[] = loadout.loadoutItems.weapons[0].attachments;
  const namesList: string[] = loadouts.map((load) => load.name);

  const [sideMenuData, setSideMenuData] = useState<SideMenuData>({
    attachments: defaultPrimaryAttachs,
  });

  const handleSideMenuContent = (content: MenuContentType) => {
    let { weapon, perks, utility } = content;
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
            <LoadoutItems items={loadout.loadoutItems} />
          </>
        ) ||
        isSelected && (
          <Context.Provider value={{ handleSideMenuContent }}>
            <LoadoutItems items={loadout.loadoutItems} selected={true} />
            <SideMenu data={sideMenuData} />
          </Context.Provider>
        )
      }
    </Container>
  );
}

export default Loadouts;
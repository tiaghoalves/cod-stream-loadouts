import React from 'react';

import Weapons from './../../shared/Weapons';
import Perks from './../../shared/Perks';
import Utilities from './../../shared/Utilities';

import { Container } from './styles';

interface IProps {
  selected?: boolean;
  loadout?: Loadout;
}

const LoadoutItems: React.FC<IProps> = ({ selected = false, loadout }) => {
  const { loadoutItems } = loadout;
  console.log('loadoutItems >', loadoutItems);

  return (
    <Container selected={selected}>
      <Weapons selected={selected} data={loadoutItems.weapons} />
      <Perks selected={selected} data={loadoutItems.perks} />
      <Utilities selected={selected} data={loadoutItems.utilities} />
    </Container>
  );
};

export default LoadoutItems;
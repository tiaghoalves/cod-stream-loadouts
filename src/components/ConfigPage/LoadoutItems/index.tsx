import React from 'react';

import Weapons from './../../shared/Weapons';
import Perks from './../../shared/Perks';
import Utilities from './../../shared/Utilities';

import { Container } from './styles';

interface IProps {
  selected?: boolean;
}

const LoadoutItems: React.FC<IProps> = ({ selected = false }) => {

  return (
    <Container selected={selected}>
      <Weapons selected={selected} />
      <Perks />
      <Utilities />
    </Container>
  );
};

export default LoadoutItems;
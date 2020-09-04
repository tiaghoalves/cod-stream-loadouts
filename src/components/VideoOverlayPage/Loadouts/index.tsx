import React from "react";

import LoadoutItems from '../LoadoutItems';
import LoadoutsList from '../LoadoutsList';

import { Container } from './styles';

function Loadouts() {
  return (
    <Container>
      <LoadoutsList size={10} />

      <LoadoutItems />
    </Container>
  );
}

export default Loadouts;
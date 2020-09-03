import React from "react";

import { Container } from './styles';

import LoadoutItems from '../LoadoutItems';
import LoadoutsList from '../LoadoutsList';

function Loadouts() {
  return (
    <Container>
      <LoadoutsList size={10} />

      <LoadoutItems />
    </Container>
  );
}

export default Loadouts;
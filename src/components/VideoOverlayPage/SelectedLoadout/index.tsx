import React from "react";

import LoadoutItems from './../LoadoutItems';
import Attachment from './../../shared/Attachment';

import { Container } from "./styles";

function SelectedLoadout() {
  return (
    <Container>
      <LoadoutItems selected={true} />
      <Attachment />
    </Container>
  );
}

export default SelectedLoadout;
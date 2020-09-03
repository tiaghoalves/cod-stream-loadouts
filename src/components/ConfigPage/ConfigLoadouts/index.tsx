import React from 'react';

import ConfigLoadoutsList from './../ConfigLoadoutsList';

import { Container } from './styles';

const ConfigLoadouts: React.FC = () => {
  function contextUpdate(context: any, delta: any) {
    // Considerar: Filtrar por alguma prop do context para usar quando for alterada (ex: 'language' => 'en' || 'pt-br')
    if (delta.includes('theme')) { }
  }

  return (
    <Container>
      <ConfigLoadoutsList />
    </Container>
  );
}

export default ConfigLoadouts;
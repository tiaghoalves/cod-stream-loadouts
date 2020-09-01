import React from 'react';

import { Container } from './styles';

const Config: React.FC = () => {

  function contextUpdate(context: any, delta: any) {
    // Considerar: Filtrar por alguma prop do context para usar quando for alterada
    if (delta.includes('theme')) { }
  }

  return (
    <Container>
      Config page
    </Container>
  );
}

export default Config;
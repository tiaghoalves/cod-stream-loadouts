import React, { useEffect } from 'react';

import { Container } from './styles';

const Config: React.FC = () => {
  function contextUpdate(context: any, delta: any) {
    // Considerar: Filtrar por alguma prop do context para usar quando for alterada
    if (delta.includes('theme')) { }
  }

  useEffect(() => {
    if (Twitch) {
      Twitch.ext.onContext((context: any, delta: any) => {
        contextUpdate(context, delta)
      })
    }
  }, []);

  return (
    <Container>
      Config page
    </Container>
  );
}

export default Config;
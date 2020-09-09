import React from 'react';

import { Container } from './styles';

const Loadouts: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Loadouts;
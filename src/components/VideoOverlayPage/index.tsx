import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './../GlobalStyles/GlobalStyles';
import Layout from './../Layout';

const VideoOverlay: React.FC = () => {
  return (
    <Router
      initialEntries={["/", "/loadout/:index"]}
      initialIndex={0}
    >
      <GlobalStyle />
      <Layout />
    </Router>
  );
}

export default VideoOverlay;
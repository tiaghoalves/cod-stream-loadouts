import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import {
  Container,
  ListButton
} from './styles';

const LoadoutsList: React.FC<{ size?: number | null }> = ({ size }) => {
  const [loadouts, setLoadouts] = useState<{
    index: number;
    name: string;
  }[]>([]);

  useEffect(() => {
    let loads = [{ index: 1, name: `Armamento 1` }];

    if (size && size !== null) {
      const loadButtons = () => {
        for (let i = 1; i < size; i++) {
          loads.push({ index: i + 1, name: `Armamento ${i + 1}` });
        }
      }

      loadButtons();
    }

    setLoadouts(loads);
  }, [size]);

  return (
    <Container>
      <ul>
        {loadouts.map(loadout => {
          return (
            <li key={loadout.index}>
              {/* <Link to={`/loadout/${loadout.index}`}>
                <ListButton>{loadout.name}</ListButton>
              </Link> */}
              <ListButton>{loadout.name}</ListButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default LoadoutsList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PlusIcon from './../../../assets/plus.svg';

import {
  Container,
  ListButton,
  AddLoadout,
  Title
} from './styles';

interface ILoadouts {
  name: string;
}

const LoadoutsList: React.FC<{ size?: number | null }> = ({ size }) => {
  const defaultLoadout: ILoadouts = {
    name: 'Loadout 1'
  };

  const [loadouts, setLoadouts] = useState<ILoadouts[]>([defaultLoadout]);

  const handleAddLoadout = () => {
    setLoadouts([...loadouts, { name: `Loadout ${loadouts.length + 1}` }]);
    console.log(loadouts);
  };

  return (
    <Container>
      <Title>Loadouts List</Title>
      <ul>
        {loadouts.map((loadout, index: number) => {
          return (
            <li key={index}>
              <Link to={`/loadout/${index}`}>
                <ListButton>{loadout.name}</ListButton>
              </Link>
            </li>
          );
        })}
      </ul>
      <AddLoadout onClick={() => handleAddLoadout()}>
        <PlusIcon />
      </AddLoadout>
    </Container>
  );
}

export default LoadoutsList;
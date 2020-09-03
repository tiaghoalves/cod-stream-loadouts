import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PlusIcon from './../../../assets/plus.svg';
import DefaultLoadout from './../../../assets/json/default_loadout.json';

import {
  Container,
  ListButton,
  AddLoadout,
  Title
} from './styles';

interface ILoadouts {
  name: string;
}

const ConfigLoadoutsList: React.FC<{ size?: number | null }> = ({ size }) => {
  const defaultLoadout: ILoadouts = {
    name: 'Loadout 1'
  };

  console.log('DefaultLoadout ->', DefaultLoadout);

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

export default ConfigLoadoutsList;
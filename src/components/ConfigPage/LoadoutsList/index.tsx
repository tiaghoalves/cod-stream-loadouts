import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PlusIcon from './../../../assets/plus.svg';

import {
  Container,
  ListButton,
  AddLoadout,
  Title
} from './styles';

interface IProps {
  loadoutsNameList?: string[];
}

const LoadoutsList: React.FC<IProps> = ({ loadoutsNameList }) => {
  const [loadouts, setLoadouts] = useState<string[]>(['Loadout 1']);

  const handleAddLoadout = () => {
    setLoadouts([...loadouts, `Loadout ${loadouts.length + 1}`]);
  };

  useEffect(() => {
    if (loadoutsNameList) {
      setLoadouts([...loadoutsNameList]);
    }
  }, []);

  return (
    <Container>
      <Title>Loadouts List</Title>
      <ul>
        {loadouts.map((loadoutName, index) => {
          return (
            <li key={index}>
              <Link to={`/loadout/${index}`}>
                <ListButton>{loadoutName}</ListButton>
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
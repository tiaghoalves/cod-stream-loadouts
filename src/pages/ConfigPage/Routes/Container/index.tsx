import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Loadouts from './../../Loadouts';
import { RouteMatchType } from './../Types';

interface IProps {
  loadoutsData: LoadoutsData;
}

const RoutesContainer: React.FC<IProps> = ({ loadoutsData }) => {
  let routeMatchSelected = useRouteMatch<RouteMatchType>('/loadout/:index');
  let routeMatchLoadouts = useRouteMatch<RouteMatchType>('/');
  const { loadouts } = loadoutsData;
  const loadoutDefault: Loadout = loadouts[0];

  return (
    <Loadouts
      loadouts={loadouts}
      matchSelected={routeMatchSelected}
      matchLoadouts={routeMatchLoadouts}
    />
  );
}

export default RoutesContainer;
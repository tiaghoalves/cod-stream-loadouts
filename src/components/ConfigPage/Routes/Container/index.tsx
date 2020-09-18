import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Loadouts from './../../Loadouts';
import { RouteMatchType } from './../Types';

interface IProps {
  loadoutsData?: LoadoutsData;
}

const RoutesContainer: React.FC<IProps> = (props) => {
  let routeMatchSelected = useRouteMatch<RouteMatchType>('/loadout/:index');
  let routeMatchLoadouts = useRouteMatch<RouteMatchType>('/');

  return (
    <Loadouts
      {...props}
      matchSelected={routeMatchSelected}
      matchLoadouts={routeMatchLoadouts}
    />
  );
}

export default RoutesContainer;
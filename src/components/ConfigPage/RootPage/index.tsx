import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Loadouts from './../Loadouts';

interface RouteMatchType {
  index: string;
}

interface IProps {
  loadoutsData?: LoadoutsData;
}

const RootPage: React.FC<IProps> = ({ loadoutsData }) => {
  let routeMatchSelected = useRouteMatch<RouteMatchType>('/loadout/:index');
  let routeMatchLoadouts = useRouteMatch<RouteMatchType>('/');

  return (
    <Loadouts
      loadoutsData={loadoutsData}
      matchSelected={routeMatchSelected}
      matchLoadouts={routeMatchLoadouts}
    />
  );
}

export default RootPage;
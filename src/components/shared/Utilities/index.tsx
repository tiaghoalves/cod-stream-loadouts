import React from 'react';

import {
  Utility,
  UtilityDetails,
  UtilityImage
} from './styles';

import FragGrenade from './../../../assets/images/utilities/frag_grenade.png';
import HeartbeatSensor from './../../../assets/images/utilities/heartbeat_sensor.png';

const Utilities: React.FC = () => {

  return (
    <>
      <Utility>
        <UtilityDetails>
          <h4>Lethal</h4>
          <span>Frag Granade</span>
        </UtilityDetails>
        <UtilityImage>
          <img src={FragGrenade} alt="Granada" />
        </UtilityImage>
      </Utility>

      <Utility>
        <UtilityDetails>
          <h4>Tactical</h4>
          <span>Heartbeat Sensor</span>
        </UtilityDetails>
        <UtilityImage>
          <img src={HeartbeatSensor} alt="Sensor de pulsação" />
        </UtilityImage>
      </Utility>
    </>
  );
};

export default Utilities;
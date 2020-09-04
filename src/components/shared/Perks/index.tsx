import React from 'react';

import {
  Perk,
  PerkImageGroup,
  PerkImage
} from './styles';

import DoubleTimePerk from './../../../assets/images/perks/Doubletime.png';
import OverkillPerk from './../../../assets/images/perks/Overkill.png';
import AmpedPerk from './../../../assets/images/perks/Amped.png';

const Perks: React.FC = () => {

  return (
    <Perk>
      <h4>Perks</h4>
      <PerkImageGroup>
        <PerkImage>
          <img src={DoubleTimePerk} alt="DoubleTimePerk" width="100px" height="50px" />
          <span>Double Time</span>
        </PerkImage>

        <PerkImage>
          <img src={OverkillPerk} alt="OverkillPerk" width="100px" height="50px" />
          <span>Overkill</span>
        </PerkImage>

        <PerkImage>
          <img src={AmpedPerk} alt="AmpedPerk" width="100px" height="50px" />
          <span>Amped</span>
        </PerkImage>
      </PerkImageGroup>
    </Perk>
  );
};

export default Perks;
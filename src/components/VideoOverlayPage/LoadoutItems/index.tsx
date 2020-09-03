import React, { useRef, RefObject } from 'react';

import Grau from './../../../assets/images/weapons/Grau_556.png';
import Mp7 from './../../../assets/images/weapons/MP7.png';
import FragGrenade from './../../../assets/images/utilities/icon_equipment_frag.png';
import HeartbeatSensor from './../../../assets/images/utilities/heartbeat_sensor.png';
import DoubleTimePerk from './../../../assets/images/perks/Doubletime.png';
import OverkillPerk from './../../../assets/images/perks/Overkill.png';
import AmpedPerk from './../../../assets/images/perks/Amped.png';

import {
  Container,
  Weapons,
  WeaponsHeader,
  WeaponAttachSlots,
  AttachSlotsContainer,
  Perks,
  PerkImage,
  PerkImageGroup,
  Utilities,
  UtilityImage,
  UtilityDetails
} from './styles';

const LoadoutItems: React.FC<{ selected?: boolean }> = ({ selected = false, children }) => {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secundaryRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (ref: RefObject<HTMLDivElement>) => {
    if (selected && ref !== null && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <Container selected={selected}>
      <Weapons
        selected={selected}
        ref={primaryRef}
        onMouseEnter={() => handleOnChange(primaryRef)}
        tabIndex={1}
      >
        <WeaponsHeader>
          <h4>Primary</h4>
          <AttachSlotsContainer>
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
          </AttachSlotsContainer>
        </WeaponsHeader>
        <span>Grau 5.56</span>
        <img src={Grau} alt="GRAU" width="150px" height="70px" />
      </Weapons>

      <Weapons
        selected={selected}
        ref={secundaryRef}
        onMouseEnter={() => handleOnChange(secundaryRef)}
        tabIndex={2}
      >
        <WeaponsHeader>
          <h4>Secundary</h4>
          <AttachSlotsContainer>
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
          </AttachSlotsContainer>
        </WeaponsHeader>
        <span>MP7</span>
        <img src={Mp7} alt="MP7" width="150px" height="70px" />
      </Weapons>

      <Perks>
        <h4>Perks</h4>

        <PerkImageGroup>
          <PerkImage>
            <img src={DoubleTimePerk} alt="Acelerado" width="100px" height="50px" />
            <span>Double Time</span>
          </PerkImage>

          <PerkImage>
            <img src={OverkillPerk} alt="Massacre" width="100px" height="50px" />
            <span>Overkill</span>
          </PerkImage>

          <PerkImage>
            <img src={AmpedPerk} alt="Amplificado" width="100px" height="50px" />
            <span>Amped</span>
          </PerkImage>
        </PerkImageGroup>
      </Perks>

      <Utilities>
        <UtilityDetails>
          <h4>Lethal</h4>
          <span>Frag Granade</span>
        </UtilityDetails>
        <UtilityImage>
          <img src={FragGrenade} alt="Granada" />
        </UtilityImage>
      </Utilities>

      <Utilities>
        <UtilityDetails>
          <h4>Tactical</h4>
          <span>Heartbeat Sensor</span>
        </UtilityDetails>
        <UtilityImage>
          <img src={HeartbeatSensor} alt="Sensor de pulsação" />
        </UtilityImage>
      </Utilities>
    </Container>
  );
}

export default LoadoutItems;
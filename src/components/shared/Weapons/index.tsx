import React, { useRef, RefObject } from 'react';

import Grau from './../../../assets/images/weapons/Grau_556.png';
import Mp7 from './../../../assets/images/weapons/MP7.png';

import {
  Weapon,
  WeaponHeader,
  WeaponAttachSlots,
  AttachSlotsContainer
} from './styles';

interface IProps {
  selected?: boolean;
}

const Weapons: React.FC<IProps> = ({ selected = false }) => {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secundaryRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (ref: RefObject<HTMLDivElement>) => {
    if (selected && ref !== null && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <>
      <Weapon
        selected={selected}
        ref={primaryRef}
        onMouseEnter={() => handleOnChange(primaryRef)}
        tabIndex={1}
      >
        <WeaponHeader>
          <h4>Primary</h4>
          <AttachSlotsContainer>
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
          </AttachSlotsContainer>
        </WeaponHeader>
        <span>Grau 5.56</span>
        <img src={Grau} alt="GRAU" width="150px" height="70px" />
      </Weapon>

      <Weapon
        selected={selected}
        ref={secundaryRef}
        onMouseEnter={() => handleOnChange(secundaryRef)}
        tabIndex={2}
      >
        <WeaponHeader>
          <h4>Secundary</h4>
          <AttachSlotsContainer>
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
            <WeaponAttachSlots />
          </AttachSlotsContainer>
        </WeaponHeader>
        <span>MP7</span>
        <img src={Mp7} alt="MP7" width="150px" height="70px" />
      </Weapon>
    </>
  );
}

export default Weapons;
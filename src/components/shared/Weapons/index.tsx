import React, { useRef, RefObject, useContext } from 'react';
import { Context } from './../../ConfigPage/Context';

const imageFromAssets = require.context('./../../../assets/images/', true);

import {
  Weapon,
  WeaponHeader,
  WeaponAttachSlots,
  AttachSlotsContainer
} from './styles';

interface IProps {
  data?: Weapon[];
  selected?: boolean;
}

const Weapons: React.FC<IProps> = ({ selected = false, data }) => {
  const { handleSideMenuContent } = useContext(Context);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secundaryRef = useRef<HTMLDivElement>(null);
  const primaryWeapon = data.find(weapon => weapon.type === 'Primary');
  const secundaryWeapon = data.find(weapon => weapon.type === 'Secundary');

  const handleOnChange = (ref: RefObject<HTMLDivElement>, weapon: Weapon) => {
    if (selected && ref !== null && ref.current) {
      ref.current.focus();

      handleSideMenuContent({
        weapon: weapon
      });
    }
  };

  return (
    <>
      {
        data.map((weapon, index) => {
          const ref = weapon.type === 'Primary' ? primaryRef : secundaryRef;
          const image = imageFromAssets(weapon.type === 'Primary' ? primaryWeapon.image : secundaryWeapon.image);

          return (
            <Weapon
              key={index}
              selected={selected}
              ref={ref}
              onMouseEnter={() => handleOnChange(ref, weapon)}
              tabIndex={index}
            >
              <WeaponHeader>
                <h4>{weapon.type}</h4>
                <AttachSlotsContainer>
                  <WeaponAttachSlots hasAttach={weapon.attachments.length >= 1} />
                  <WeaponAttachSlots hasAttach={weapon.attachments.length >= 2} />
                  <WeaponAttachSlots hasAttach={weapon.attachments.length >= 3} />
                  <WeaponAttachSlots hasAttach={weapon.attachments.length >= 4} />
                  <WeaponAttachSlots hasAttach={weapon.attachments.length >= 5} />
                </AttachSlotsContainer>
              </WeaponHeader>
              <span>{weapon.name}</span>
              <img src={image} alt={weapon.name} width="150px" height="70px" />
            </Weapon>
          )
        })
      }
    </>
  );
}

export default Weapons;
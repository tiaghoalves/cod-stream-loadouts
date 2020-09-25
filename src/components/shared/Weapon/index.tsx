import React, { RefObject, useContext, useState, useEffect } from 'react';

import { Context, MenuContentType } from '../../ConfigPage/Context';
import { ItemClickedType, SelectedItemType } from './../../ConfigPage/LoadoutItems';

import {
  WeaponContainer,
  WeaponHeader,
  WeaponAttachSlots,
  AttachSlotsContainer
} from './styles';

interface IProps {
  data: LoadoutItemType;
  selected: boolean;
  selectedItem: SelectedItemType;
  onMouseEnter?: (ref: RefObject<HTMLDivElement>, loadoutItem: MenuContentType) => void;
  onClick?: (itemClicked: ItemClickedType) => void;
}

const Weapon: React.FC<IProps> = ({ data, selected = false, selectedItem, onMouseEnter, onClick }) => {
  const {
    item,
    tabIndex,
    image,
    ref
  } = data;
  const weapon = item as Weapon;
  const { handleSideMenuContent } = useContext(Context);
  const [weaponClicked, setWeaponClicked] = useState(false);

  const handleOnMouseEnter = (ref: RefObject<HTMLDivElement>, weapon: Weapon) => {
    if (!selectedItem.clicked && weapon) {
      onMouseEnter(ref, { weapon });
    }
  }

  const handleOnClick = (weapon: Weapon) => {
    onClick({ item: weapon });
    handleSideMenuContent({ weapon });
  }

  useEffect(() => {
    if (selectedItem.clicked && selectedItem.item === item) {
      setWeaponClicked(true);
    } else {
      setWeaponClicked(false);
    }
  }, [selectedItem]);

  return (
    <WeaponContainer
      selected={selected}
      weaponClicked={weaponClicked}
      ref={ref}
      onMouseEnter={() => handleOnMouseEnter(ref, weapon)}
      onClick={() => handleOnClick(weapon)}
      tabIndex={tabIndex}
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
    </WeaponContainer>
  );
}

export default Weapon;
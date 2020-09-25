import React, { useState, RefObject, useContext, useRef } from 'react';

const imageFromAssets = require.context('./../../../assets/images/', true);
import { Context, MenuContentType } from './../Context';
import Weapon, { WeaponType } from '../../shared/Weapon';
import Perks from './../../shared/Perks';
import Utilities from './../../shared/Utilities';

import { Container } from './styles';

interface IProps {
  selected?: boolean;
  items?: LoadoutItems;
}

export interface ItemClickedType {
  item?: Weapon | Perk[] | Utility;
}

export interface SelectedItemType {
  item?: Weapon | Perk[] | Utility;
  clicked: boolean;
}

const LoadoutItems: React.FC<IProps> = ({ selected = false, items }) => {
  const { weapons, perks, utilities } = items;
  const { handleSideMenuContent } = useContext(Context);
  const primaryWeapon = weapons.find(weapon => weapon.type === "Primary");
  const secundaryWeapon = weapons.find(weapon => weapon.type === "Secundary");
  const primaryRef = useRef<HTMLDivElement>();
  const secundaryRef = useRef<HTMLDivElement>();
  const [itemClicked, setItemClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    clicked: itemClicked
  });

  const primaryWeaponData: WeaponType = {
    tabIndex: 0,
    weapon: primaryWeapon,
    image: imageFromAssets(primaryWeapon.image),
    ref: primaryRef,
  }
  const secundaryWeaponData: WeaponType = {
    tabIndex: 1,
    weapon: secundaryWeapon,
    image: imageFromAssets(secundaryWeapon.image),
    ref: secundaryRef,
  }

  const handleMouseEnter = (ref: RefObject<HTMLDivElement>, loadoutItem: MenuContentType) => {
    const { weapon, perks, utility } = loadoutItem;
    let menuContent: MenuContentType;

    if (weapon && !itemClicked && (ref.current === primaryRef.current || ref.current === secundaryRef.current)) {
      menuContent = { weapon };
    }

    if (perks && (ref.current)) {
      menuContent = { perks };
    }

    if (utility && (ref.current)) {
      menuContent = { utility };
    }

    if (menuContent) {
      handleSideMenuContent(menuContent);
    }
  }

  const handleOnClick = (itemClicked: ItemClickedType) => {
    let itemData: SelectedItemType = {
      clicked: true,
      item: itemClicked.item
    };

    setSelectedItem(itemData);
    setItemClicked(!itemClicked);
  }

  return (
    <Container selected={selected}>
      {
        weapons.map((weapon, index) => {
          const isPrimaryType = weapon.type === "Primary";
          return (
            <Weapon
              key={index}
              selected={selected}
              selectedItem={selectedItem}
              weaponData={isPrimaryType ? primaryWeaponData : secundaryWeaponData}
              onMouseEnter={(ref, loadoutItem) => handleMouseEnter(ref, loadoutItem)}
              onClick={(itemClicked: ItemClickedType) => handleOnClick(itemClicked)}
            />
          )
        })
      }
      <Perks selected={selected} data={perks} />
      <Utilities selected={selected} data={utilities} />
    </Container>
  );
};

export default LoadoutItems;
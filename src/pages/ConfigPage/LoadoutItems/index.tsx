import React, { useState, RefObject, useContext, useRef } from 'react';

const imageFromAssets = require.context('./../../../assets/images/', true);
import { Context, MenuContentType } from './../Context';
import Weapon from './../../../components/Weapon';
import Perks from './../../../components/Perks';
import Utility from './../../../components/Utility';

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
  const lethal = utilities.find(utility => utility.type === "Lethal");
  const tactical = utilities.find(utility => utility.type === "Tactical");
  const primaryRef = useRef<HTMLDivElement>();
  const secundaryRef = useRef<HTMLDivElement>();
  const lethalRef = useRef<HTMLDivElement>();
  const tacticalRef = useRef<HTMLDivElement>();
  const perksRef = useRef<HTMLDivElement>();
  const [itemClicked, setItemClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>({
    clicked: itemClicked
  });

  // Armas
  const primaryData: LoadoutItemType = {
    tabIndex: 0,
    item: primaryWeapon,
    image: imageFromAssets(primaryWeapon.image),
    ref: primaryRef,
  }
  const secundaryData: LoadoutItemType = {
    tabIndex: 1,
    item: secundaryWeapon,
    image: imageFromAssets(secundaryWeapon.image),
    ref: secundaryRef,
  }
  // Utilititarias
  const lethalData = {
    tabIndex: 3,
    item: lethal,
    image: imageFromAssets(lethal.image),
    ref: lethalRef
  }
  const tacticalData = {
    tabIndex: 4,
    item: tactical,
    image: imageFromAssets(tactical.image),
    ref: tacticalRef
  }

  const handleMouseEnter = (ref: RefObject<HTMLDivElement>, loadoutItem: MenuContentType) => {
    const { weapon, perks, utility } = loadoutItem;

    if (weapon && !itemClicked && (ref.current === primaryRef.current || ref.current === secundaryRef.current)) {
      handleSideMenuContent({ weapon });
    }

    if (perks && !itemClicked && (ref.current === perksRef.current)) {
      handleSideMenuContent({ perks });
    }

    if (utility && !itemClicked && (ref.current === lethalRef.current || ref.current === tacticalRef.current)) {
      handleSideMenuContent({ utility });
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
              data={isPrimaryType ? primaryData : secundaryData}
              onMouseEnter={(ref, loadoutItem) => handleMouseEnter(ref, loadoutItem)}
              onClick={(itemClicked: ItemClickedType) => handleOnClick(itemClicked)}
            />
          )
        })
      }
      <Perks selected={selected} data={perks} />
      {
        utilities.map((utility, index) => {
          const isLethalType = utility.type === "Lethal";
          return (
            <Utility
              key={index}
              selected={selected}
              selectedItem={selectedItem}
              data={isLethalType ? lethalData : tacticalData}
              onMouseEnter={(ref, loadoutItem) => handleMouseEnter(ref, loadoutItem)}
              onClick={(itemClicked: ItemClickedType) => handleOnClick(itemClicked)}
            />
          )
        })
      }
    </Container>
  );
};

export default LoadoutItems;
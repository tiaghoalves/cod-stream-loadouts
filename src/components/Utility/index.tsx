import React, { RefObject, useContext, useRef, useState, useEffect } from 'react';

import { Context, MenuContentType } from './../../pages/ConfigPage/Context';
import { ItemClickedType, SelectedItemType } from './../../pages/ConfigPage/LoadoutItems';

import {
  UtilityContainer,
  UtilityDetails,
  UtilityImage
} from './styles';

interface IProps {
  data: LoadoutItemType;
  selected: boolean;
  selectedItem: SelectedItemType;
  onMouseEnter?: (ref: RefObject<HTMLDivElement>, loadoutItem: MenuContentType) => void;
  onClick?: (itemClicked: ItemClickedType) => void;
}

const Utility: React.FC<IProps> = ({ data, selected = false, selectedItem, onMouseEnter, onClick }) => {
  const {
    item,
    tabIndex,
    image,
    ref
  } = data;
  const utility = item as Utility;
  const { handleSideMenuContent } = useContext(Context);
  const [utilityClicked, setUtilityClicked] = useState(false);

  const handleOnMouseEnter = (ref: RefObject<HTMLDivElement>, utility: Utility) => {
    if (!selectedItem.clicked && utility) {
      onMouseEnter(ref, { utility });
    }
  }

  const handleOnClick = (utility: Utility) => {
    onClick({ item: utility });
    handleSideMenuContent({ utility });
  }

  useEffect(() => {
    if (selectedItem.clicked && selectedItem.item === item) {
      setUtilityClicked(true);
    } else {
      setUtilityClicked(false);
    }
  }, [selectedItem]);

  return (
    <UtilityContainer
      selected={selected}
      tabIndex={tabIndex}
      utilityClicked={utilityClicked}
      ref={ref}
      onMouseEnter={() => handleOnMouseEnter(ref, utility)}
      onClick={() => handleOnClick(utility)}
    >
      <UtilityDetails>
        <h4>{utility.type}</h4>
        <span>{utility.name}</span>
      </UtilityDetails>
      <UtilityImage>
        <img src={image} alt={utility.name} />
      </UtilityImage>
    </UtilityContainer>
  );
};

export default Utility;
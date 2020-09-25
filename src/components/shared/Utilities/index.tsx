import React, { useRef, RefObject, useContext, useState } from 'react';
import { Context } from './../../ConfigPage/Context';

const imageFromAssets = require.context('./../../../assets/images/', true);

import {
  Utility,
  UtilityDetails,
  UtilityImage
} from './styles';

interface IProps {
  data?: Utility[];
  selected?: boolean;
}

const Utilities: React.FC<IProps> = ({ selected = false, data }) => {
  const { handleSideMenuContent } = useContext(Context);
  const refLethal = useRef<HTMLDivElement>(null);
  const refTactical = useRef<HTMLDivElement>(null);
  const lethal = data.find(util => util.type === "Lethal");
  const tactical = data.find(util => util.type === "Tactical");
  const [lethalClicked, setLethalClicked] = useState(false);
  const [tacticalClicked, setTacticalClicked] = useState(false);

  const handleOnMouseEnter = (ref: RefObject<HTMLDivElement>, utility: Utility) => {
    if (selected && ref !== null && ref.current) {
      ref.current.focus();
    }

    if (!lethalClicked && !tacticalClicked) {
      handleSideMenuContent({ utility });
    }
  }

  const handleOnClick = (isLethal: boolean, utility: Utility) => {
    if (isLethal) {
      setLethalClicked(true);
      setTacticalClicked(false);
    } else {
      setLethalClicked(false);
      setTacticalClicked(true);
    }

    handleSideMenuContent({ utility });
  }

  return (
    <>
      {
        data.map((utility, index) => {
          const checkIsLethalType = utility.type === "Lethal";
          const image = imageFromAssets((checkIsLethalType) ? lethal.image : tactical.image);
          const ref = (checkIsLethalType) ? refLethal : refTactical;

          return (
            <Utility
              key={index}
              selected={selected}
              isClicked={(checkIsLethalType) ? lethalClicked : tacticalClicked}
              ref={ref}
              onMouseEnter={() => handleOnMouseEnter(ref, utility)}
              onClick={() => handleOnClick(checkIsLethalType, utility)}
              tabIndex={index}
            >
              <UtilityDetails>
                <h4>{utility.type}</h4>
                <span>{utility.name}</span>
              </UtilityDetails>
              <UtilityImage>
                <img src={image} alt={utility.name} />
              </UtilityImage>
            </Utility>
          )
        })
      }
    </>
  );
};

export default Utilities;
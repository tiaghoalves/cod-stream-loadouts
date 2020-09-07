import React, { useRef, RefObject } from 'react';

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
  const refLethal = useRef<HTMLDivElement>(null);
  const refTactical = useRef<HTMLDivElement>(null);
  const lethal = data.find(util => util.type === "Lethal");
  const tactical = data.find(util => util.type === "Tactical");

  const handleOnChange = (ref: RefObject<HTMLDivElement>) => {
    if (selected && ref !== null && ref.current) {
      ref.current.focus();
      console.log(ref.current);
    }
  };

  return (
    <>
      {
        data.map((utility, index) => {
          const image = imageFromAssets(utility.type == "Lethal" ? lethal.image : tactical.image);
          const ref = utility.type == "Lethal" ? refLethal : refTactical;
          return (
            <Utility
              key={index}
              selected={selected}
              ref={ref}
              onMouseEnter={() => handleOnChange(ref)}
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
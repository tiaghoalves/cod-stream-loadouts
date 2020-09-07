import React from 'react';

const imageFromAssets = require.context('./../../../assets/images/', true);

import {
  Utility,
  UtilityDetails,
  UtilityImage
} from './styles';

interface IProps {
  data?: Utility[];
}

const Utilities: React.FC<IProps> = ({ data }) => {
  const lethal = data.find(util => util.type === "Lethal");
  const tactical = data.find(util => util.type === "Tactical");
  console.log(lethal);

  return (
    <>
      {
        data.map((utility, index) => {
          const image = imageFromAssets(utility.type == "Lethal" ? lethal.image : tactical.image);

          return (
            <Utility key={index}>
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
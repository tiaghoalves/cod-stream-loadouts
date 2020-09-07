import React from 'react';

import {
  Perk,
  PerkImageGroup,
  PerkImage
} from './styles';

const imageFromAssets = require.context('./../../../assets/images/', true);

interface IProps {
  data?: Perk[];
}

const Perks: React.FC<IProps> = ({ data }) => {
  const bluePerk = data.find(perk => perk.type === "Blue");
  const redPerk = data.find(perk => perk.type === "Red");
  const yellowPerk = data.find(perk => perk.type === "Yellow");

  return (
    <Perk>
      <h4>Perks</h4>
      <PerkImageGroup>
        {
          data.map((perk, index) => {
            let image: string;

            switch (perk.type) {
              case "Blue":
                image = imageFromAssets(bluePerk.image);
                break;
              case "Red":
                image = imageFromAssets(redPerk.image);
                break;
              case "Yellow":
                image = imageFromAssets(yellowPerk.image);
                break;
            }

            return (
              <PerkImage key={index}>
                <img src={image} alt={perk.name} width="100px" height="50px" />
                <span>{perk.name}</span>
              </PerkImage>
            )
          })
        }
      </PerkImageGroup>
    </Perk>
  );
};

export default Perks;
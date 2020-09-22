import React from 'react';

const imageFromAssets = require.context('./../../../../assets/images', true);

import {
  Container,
  Detail
} from './styles';

interface IProps {
  data: Attachment[];
}

const SideMenuAttachment: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {
        data.map((attach, index) => {
          const image = imageFromAssets(attach.image);

          return (
            <Container key={index}>
              <img src={image} alt={attach.name}></img>
              <Detail>
                <h5>{attach.category}</h5>
                <span>{attach.name}</span>
              </Detail>
            </Container>
          );
        })
      }
    </>
  );
}

export default SideMenuAttachment;
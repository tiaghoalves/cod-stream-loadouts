import React from 'react';

// import { } from './styles';

interface IProps {
  data: Utility;
}

const SideMenuUtilities: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {/* {
        data.map((attach, index) => {
          const image = imageFromAssets(attach.image);

          return (
            <AttachmentContainer key={index}>
              <img src={image} alt={attach.name}></img>
              <AttachmentDetail>
                <h5>{attach.category}</h5>
                <span>{attach.name}</span>
              </AttachmentDetail>
            </AttachmentContainer>
          );
        })
      } */}
    </>
  );
}

export default SideMenuUtilities;
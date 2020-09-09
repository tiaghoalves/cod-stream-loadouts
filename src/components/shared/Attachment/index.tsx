import React from 'react';

import {
  Title,
  AttachmentContainer,
  AttachmentDetail
} from './styles';

import RoundMag from './../../../assets/images/attachments/ammunition/60roundMags.png';
import tacticalSuppressor from './../../../assets/images/attachments/muzzle/tacticalSuppressor.png';
import sleightOfHand from './../../../assets/images/attachments/perk/sleightOfHand.png';
import integralHybrid from './../../../assets/images/attachments/optic/integralHybrid.png';
import comandoForegrip from './../../../assets/images/attachments/underbarrel/comandoForegrip.png';

const Attachment: React.FC = () => {
  return (
    <>
      <Title>Attachments</Title>

      <AttachmentContainer>
        <img src={tacticalSuppressor} alt="Supressor Tatico"></img>
        <AttachmentDetail>
          <h5>Muzzle</h5>
          <span>Tactical Suppressor</span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <AttachmentDetail>
          <h5>Barrel</h5>
          <span></span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <AttachmentDetail>
          <h5>Laser</h5>
          <span></span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <img src={integralHybrid} alt="Integral Hybrid"></img>
        <AttachmentDetail>
          <h5>Optic</h5>
          <span>Integral Hybrid</span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <AttachmentDetail>
          <h5>Stock</h5>
          <span></span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <img src={comandoForegrip} alt="Comando Foregrip"></img>
        <AttachmentDetail>
          <h5>Underbarrel</h5>
          <span>Comando</span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <img src={RoundMag} alt="Carregadores de 60 Projéteis" />
        <AttachmentDetail>
          <h5>Ammunition</h5>
          <span>60 Round Mag</span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <AttachmentDetail>
          <h5>Rear Grip</h5>
          <span></span>
        </AttachmentDetail>
      </AttachmentContainer>

      <AttachmentContainer>
        <img src={sleightOfHand} alt="Mãos leves" />
        <AttachmentDetail>
          <h5>Perk</h5>
          <span>Sleight Of Hand</span>
        </AttachmentDetail>
      </AttachmentContainer>
    </>
  );
}

export default Attachment;
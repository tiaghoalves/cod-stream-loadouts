import React from "react";

import RoundMag from './../../images/attachments/ammunition/60roundMags.png';
import taticalSuppressor from './../../images/attachments/muzzle/taticalSuppressor.png';
import sleightOfHand from './../../images/attachments/perk/sleightOfHand.png';
import integralHybrid from './../../images/attachments/optic/integralHybrid.png';
import comandoForegrip from './../../images/attachments/underbarrel/comandoForegrip.png';

import LoadoutItems from './../LoadoutItems';

import {
  Container,
  Attachment,
  AttachmentsContainer,
  AttachmentDetail
} from "./styles";

function SelectedLoadout() {
  console.log('SelectedLoadout');

  return (
    <Container>
      <LoadoutItems selected={true} />

      <AttachmentsContainer>
        <h3>Attachments</h3>

        <Attachment>
          <img src={taticalSuppressor} alt="Supressor Tatico"></img>
          <AttachmentDetail>
            <h5>Boca</h5>
            <span>Supressor Tático</span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <AttachmentDetail>
            <h5>Cano</h5>
            <span></span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <AttachmentDetail>
            <h5>Laser</h5>
            <span></span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <img src={integralHybrid} alt="Integral Hybrid"></img>
          <AttachmentDetail>
            <h5>Lente</h5>
            <span>Integral Hibrida</span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <AttachmentDetail>
            <h5>Coronha</h5>
            <span></span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <img src={comandoForegrip} alt="Comando Foregrip"></img>
          <AttachmentDetail>
            <h5>Acoplamento</h5>
            <span>Comando</span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <img src={RoundMag} alt="Carregadores de 60 Projéteis" />
          <AttachmentDetail>
            <h5>Munição</h5>
            <span>Carregadores de 60 Projéteis</span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <AttachmentDetail>
            <h5>Cabo</h5>
            <span></span>
          </AttachmentDetail>
        </Attachment>

        <Attachment>
          <img src={sleightOfHand} alt="Mãos leves" />
          <AttachmentDetail>
            <h5>Vantagem</h5>
            <span>Mãos leves</span>
          </AttachmentDetail>
        </Attachment>
      </AttachmentsContainer>
    </Container>
  );
}

export default SelectedLoadout;
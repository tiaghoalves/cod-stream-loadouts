import React from "react";
import { useHistory, match } from "react-router-dom";

import ArrowLeft from "./../../assets/icons/arrow-left.svg";

import {
  Container,
  BackButton,
  Title
} from './styles';

interface IProps {
  match: match<{ index: string; }> | null;
  isConfig?: boolean;
}

const Header: React.FC<IProps> = ({ match, isConfig }) => {
  let history = useHistory();
  let loadoutSelected = (match && match.isExact) ? true : false;

  const handleBack = () => {
    history.push("/");
  }

  return (
    <Container isConfig={isConfig}>
      {
        loadoutSelected &&
        (
          <BackButton onClick={handleBack}>
            <ArrowLeft /> Back
          </BackButton>
        )
      }
      <Title>{isConfig ? 'Configuration' : 'Stream Loadouts'}</Title>
    </Container>
  );
}

export default Header;
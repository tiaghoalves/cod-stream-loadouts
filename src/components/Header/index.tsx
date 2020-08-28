import React from "react";
import { useHistory, match } from "react-router-dom";

import ArrowLeft from "./../../images/utils/arrow-left.svg";

import {
  Container,
  BackButton
} from './styles';

interface HeaderProps {
  match: match<{
    index: string;
  }> | null;
}

const Header: React.FC<HeaderProps> = ({ match }: HeaderProps) => {
  console.log('Header ->', match);

  let history = useHistory();
  let showBackButton = (match !== null && match.isExact) ? true : false;

  const handleBack = () => {
    history.push("/");
  }

  return (
    <Container>
      {showBackButton && (<BackButton onClick={handleBack}><ArrowLeft /> Voltar</BackButton>)}
      <h3>Stream Loadouts</h3>
    </Container>
  );
}

export default Header;
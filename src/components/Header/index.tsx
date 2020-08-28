import React from "react";
// import { useHistory, match } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "./../../images/utils/arrow-left.svg";

import {
  Container,
  BackButton
} from './styles';

// interface HeaderProps {
//   match: match<{
//     index: string;
//   }> | null;
// }

interface HeaderProps {
  match: {
    index: string;
    isExact: boolean;
  } | null;
}

const Header: React.FC<HeaderProps> = ({ match }: HeaderProps) => {
  console.log('Header ->', match);

  //let history = useHistory();
  let showBackButton = (match !== null && match.isExact) ? true : false;

  const handleBack = () => {
    //history.push("/");
  }

  return (
    <Container>
      {/* {showBackButton && (<BackButton onClick={handleBack}><ArrowLeft width="15" height="15" /> Voltar</BackButton>)} */}
      <h3>Stream Loadouts</h3>
    </Container>
  );
}

export default Header;
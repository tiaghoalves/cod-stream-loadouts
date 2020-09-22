import React, { useState, useEffect } from 'react';

import SideMenuContent from './Content';
import SideMenuAttachment from './Attachment';
import SideMenuUtilities from './Utilities';
import { Container } from './styles';

interface IProps {
  data: {
    attachments?: Attachment[];
    perks?: Perk[];
    utility?: Utility;
  }
}

const SideMenu: React.FC<IProps> = ({ data }) => {
  const [menuTitle, setMenuTitle] = useState<string>("");
  const { attachments, perks, utility } = data;
  let menuContent: Attachment[] = attachments;

  useEffect(() => {
    let title: string;
    if (attachments) {
      title = "Attachments";
      menuContent = attachments;
    }

    if (utility) {
      title = "Utility";
    }

    if (perks) {
      title = "Perks";
    }

    setMenuTitle(title);
  }, [attachments, perks, utility]);

  return (
    <Container>
      <SideMenuContent title={menuTitle}>
        {
          attachments && (
            <SideMenuAttachment data={menuContent} />
          )
        }
      </SideMenuContent>
    </Container>
  );
};

export default SideMenu;
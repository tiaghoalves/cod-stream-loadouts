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

interface MenuContentProps {
  attachments?: Attachment[];
  perks?: Perk[];
  utility?: Utility;
}

const SideMenu: React.FC<IProps> = ({ data }) => {
  const [menuTitle, setMenuTitle] = useState<string>("");
  const { attachments, perks, utility } = data;
  let menuContent: MenuContentProps = { attachments };

  useEffect(() => {
    let title: string;

    if (attachments) {
      title = "Attachments";
      menuContent = { attachments };
    }

    if (utility) {
      title = "Utility";
      menuContent = { utility };
    }

    if (perks) {
      title = "Perks";
      menuContent = { perks };
    }

    setMenuTitle(title);
  }, [attachments, perks, utility]);

  return (
    <Container>
      <SideMenuContent title={menuTitle}>
        {
          attachments && (
            <SideMenuAttachment data={menuContent.attachments} />
          ) ||
          utility && (
            <SideMenuUtilities data={menuContent.utility} />
          )
        }
      </SideMenuContent>
    </Container>
  );
};

export default SideMenu;
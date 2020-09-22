import { createContext } from 'react';

export interface ContentType {
  weapon?: Weapon;
  perks?: Perk[];
  utility?: Utility;
}

export const Context = createContext({
  handleSideMenuContent: (content: ContentType) => { }
});

import { createContext } from 'react';

export interface MenuContentType {
  weapon?: Weapon | null;
  perks?: Perk[] | null;
  utility?: Utility | null;
}

export const Context = createContext({
  handleSideMenuContent: (content: MenuContentType) => { }
});

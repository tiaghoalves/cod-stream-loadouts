interface Window {
  Twitch: any;
}

Twitch = window.Twitch.ext || {};
const Twitch = Twitch.ext;

interface Attachment {
  name: string;
  category: string;
  image: string;
}

interface Weapon {
  name: string;
  image: string;
  type: WeaponType;
  attachments: Attachment[];
}

interface Perk {
  type: string;
  name: string;
  image: string;
}

interface Utility {
  name: string;
  type: UtilityType;
  image: string;
}

interface LoadoutItems {
  weapons: Weapon[];
  perks: Perk[];
  utilities: Utility[];
}

interface Loadout {
  name: string;
  loadoutItems: LoadoutItems;
}

interface LoadoutsData {
  loadouts: Loadout[];
}

interface LoadoutItemType {
  tabIndex: number,
  item: Weapon | Perk[] | Utility,
  image: string,
  ref: RefObject<HTMLDivElement>,
}

interface Window {
  Twitch: any;
}

interface Attachment {
  name: string;
  category: string;
  image: string;
}

interface Weapon {
  name: string;
  image: string;
  type: string;
  attachments: Attachment[];
}

interface Perk {
  name: string;
  image: string;
}

interface Utility {
  name: string;
  type: string;
  image: string;
}

interface LoadoutItems {
  weapons: Weapon[];
  perks: Perk[];
  utilities: Utility[];
}

interface Loadout {
  name: string;
  loadoutsItems: LoadoutItems[];
}

interface LoadoutsData {
  loadouts: Loadout[];
}

Twitch = window.Twitch.ext || {};
const Twitch = Twitch.ext;

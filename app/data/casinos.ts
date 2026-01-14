import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
  id: number;
  name: string;
  logo: LogoKey | string;
  rating: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
}

interface CasinoRawData {
  name: string;
  logo: LogoKey | string;
  bonus: string;
  url: string;
  isMobile?: boolean;
}

// Helper function to generate ID from name
const generateIdFromName = (name: string): number => {
  return name.toLowerCase().replace(/\s+/g, '').split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
};
// Badge options for top 3
const topBadges = ["Best Bonus", "Top Pick", "Trending Now"];

// Raw casino data without id, rating, and badge
const casinosRawData: CasinoRawData[] = [
  {
    name: "Lizaro",
    logo: "/lizaro.png",
    bonus: "350% up to £680 + 200 FS",
    url: "https://any-site1.com/hhbHzRbC",
    isMobile: true
  },

  {
    name: "VegasHero",
    logo: "/VegasHero.png",
    bonus: "300% up to €500 + 300 FS",
    url: "https://any-site1.com/sF24tnhr",
    isMobile: true
  },
  {
    name: "Agent No Wager",
    logo: "/agentnowager.svg",
    bonus: "Up to 90 FS + 45% Without Wager!",
    url: "https://any-site1.com/ht2pbwVK",
    isMobile: true
  },
  {
    name: "SlotsCharm",
    logo: "/slotscharm.svg",
    bonus: "375% + 300 FS",
    url: "https://any-site1.com/PQYz23Yc",
    isMobile: true
  },
  {
    name: "Lucky Mister",
    logo: "/luckymister.svg",
    bonus: "500% + 500 FS",
    url: "https://any-site1.com/czmt7rX8",
    isMobile: true
  },
  {
    name: "Golden Mister",
    logo: "/goldenmister.svg",
    bonus: "925% to your first deposits!",
    url: "https://any-site1.com/3pJCKVKr",
    isMobile: true
  },

  

 
  {
    name: "Voodoo Dreams",
    logo: "voodooDreams",
    bonus: "100% Bonus up to £50 + 50 Real Money Free Spins",
    url: "https://www.voodoocasino.com"
  },
  {
    name: "Pub Casino",
    logo: "pubCasino",
    bonus: "Welcome Bonus Get 100% Up To £100",
    url: "https://www.pubcasino.com"
  },
  {
    name: "Ladbrokes",
    logo: "ladbrokes",
    bonus: "Play £10 Get 200 Free Spins",
    url: "https://www.ladbrokes.com"
  },
  {
    name: "Midnite",
    logo: "midnite",
    bonus: "Bet £20 Get 100 Free Spins",
    url: "https://www.midnite.com"
  },
  {
    name: "Spinland",
    logo: "spinland",
    bonus: "200% Bonus up to £3,000 + 50 Free Spins",
    url: "https://www.spinland.com"
  },
  {
    name: "Karamba",
    logo: "karamba",
    bonus: "100% Bonus up to £200 + 20 Free Spins",
    url: "https://www.karamba.com"
  },
  {
    name: "Coral Casino",
    logo: "coral",
    bonus: "Play £10 Get 200 Free Spins",
    url: "https://www.coral.co.uk"
  },
  {
    name: "LottoGo Casino",
    logo: "lottogo",
    bonus: "100% Bonus Up to £200 + 300 Bonus Spins",
    url: "https://www.lottogo.com"
  },
  {
    name: "MrQ Casino",
    logo: "mrq",
    bonus: "Spend £10 Get 60 Spins No Wagering On Winnings",
    url: "https://www.mrq.com"
  },
  {
    name: "NetBet",
    logo: "netbet",
    bonus: "Up to 500 Free Spins On First Deposit",
    url: "https://www.netbet.co.uk"
  }
];

// Generate casinos with auto-calculated id, rating, and badge
export const casinos: Casino[] = casinosRawData.map((casino, index) => {
  const rating = parseFloat((9.9 - index * 0.1).toFixed(1));
  
  return {
    id: generateIdFromName(casino.name),
    name: casino.name,
    logo: casino.logo,
    rating: rating,
    bonus: casino.bonus,
    url: casino.url,
    badge: index < 3 ? topBadges[index] : undefined,
    isMobile: casino.isMobile
  };
});

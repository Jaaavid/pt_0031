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
///
// Raw casino data without id, rating, and badge
const casinosRawData: CasinoRawData[] = [
  {
    name: "Lizaro",
    logo: "/lizaro.png",
    bonus: "350% up to £680 + 200 FREE SPINS",
    url: "https://any-site1.com/hhbHzRbC",
    isMobile: true
  },
  {
    name: "RollySpin",
    logo: "/RollySpin.svg",
    bonus: "200% up to 1,000£ + 50 FREE SPINS",
    url: "https://any-site1.com/znYjBPcw",
    isMobile: true
  },
  {
    name: "CasinoPrestige",
    logo: "/prestige.svg",
    bonus: "100% Bonus up to £750 + 100 Free Spins + 3 Wheel of Luck Spins",
    url: "https://any-site1.com/yZ4VnswQ",
    isMobile:true
  },
  {
    name: "DaffSpin",
    logo: "/daffspin.png",
    bonus: "HIGHROLLER BONUS +50% Up to 500£",
    url: "https://any-site1.com/zGmF9Yvq",
    isMobile: true
  },
  // {
  //   name: "Agent No Wager",
  //   logo: "/agentnowager.svg",
  //   bonus: "Up to 90 FREE SPINS + 45% Without Wager!",
  //   url: "https://any-site1.com/ht2pbwVK",
  //   isMobile: true
  // },
  // {
  //   name: "SlotsCharm",
  //   logo: "/slotscharm.svg",
  //   bonus: "375% up to £3000 + 300 FREE SPINS",
  //   url: "https://any-site1.com/PQYz23Yc",
  //   isMobile: true
  // },
  // {
  //   name: "HotLoot",
  //   logo: "/hotloot.svg",
  //   bonus: "250% UP TO €2.500 + 100 FREE SPINS",
  //   url: "https://any-site1.com/YTpqyz6h",
  //   isMobile: true
  // },

  // {
  //   name: "LegionBet",
  //   logo: "/legionbet.svg",
  //   bonus: "250% up to £13000 + 300 FREE SPINS",
  //   url: "https://any-site1.com/K7w9ctrg",
  //   isMobile: true
  // },
  // {
  //   name: "VegasHero",
  //   logo: "/VegasHero.png",
  //   bonus: "300% up to €500 + 300 FREE SPINS",
  //   url: "https://any-site1.com/sF24tnhr",
  //   isMobile: true
  // },
  // {
  //   name: "LuckyWave",
  //   logo: "/luckywave.svg",
  //   bonus: "100% UP TO 2,000 €/£ + 200 FREE SPINS",
  //   url: "https://any-site1.com/m5Cn7JWD",
  //   isMobile: true
  // },


  // {
  //   name: "SlotLair",
  //   logo: "/slotlair.svg",
  //   bonus: "100% up to €/£ 3,000 + 100 FREE SPINS",
  //   url: "https://any-site1.com/qqr6XvNP",
  //   isMobile: true
  // },

  // {
  //   name: "WinPlace",
  //   logo: "/winplace.svg",
  //   bonus: "100% bonus of up to £/€ 4,000 + 100 FREE SPINS",
  //   url: "https://any-site1.com/KmJFBtpf",
  //   isMobile: true
  // },
  // {

  // {
  //   name: "AmonBet",
  //   logo: "/amonbet.svg",
  //   bonus: "100% up to 1,000£ + 100 FREE SPINS",
  //   url: "https://any-site1.com/zx4j59vs",
  //   isMobile: true
  // },




  // {
  //   name: "VegasHero",
  //   logo: "/VegasHero.png",
  //   bonus: "300% up to €500 + 300 FS",
  //   url: "https://any-site1.com/sF24tnhr",
  //   isMobile: true
  // },
  // {
  //   name: "Agent No Wager",
  //   logo: "/agentnowager.svg",
  //   bonus: "Up to 90 FS + 45% Without Wager!",
  //   url: "https://any-site1.com/ht2pbwVK",
  //   isMobile: true
  // },
  //
  // {





  // {
  //   name: "Lucky Mister",
  //   logo: "/luckymister.svg",
  //   bonus: "500% + 500 FS",
  //   url: "https://any-site1.com/czmt7rX8",
  //   isMobile: true
  // },
  // {
  //   name: "Golden Mister",
  //   logo: "/goldenmister.svg",
  //   bonus: "925% to your first deposits!",
  //   url: "https://any-site1.com/3pJCKVKr",
  //   isMobile: true
  // },

  // {
  //   name: "GoldenGenie",
  //   logo: "/goldengenie.png",
  //   bonus: "400% up to 2000€ + 100 FS",
  //   url: "https://any-site1.com/jsYjtc3w",
  //   isMobile: true
  // },
  // {
  //   name: "Astrozino",
  //   logo: "/astrozino.webp",
  //   bonus: "200% up to €1.500 + 100 FS",
  //   url: "https://any-site1.com/bKKnfqLP",
  //   isMobile: true
  // },


  {
    name: "Karamba",
    logo: "/karamba.svg",
    bonus: "100% Bonus up to £200 + 20 Free Spins",
    url: "https://www.karamba.co.uk/lp/wo-300-spins?asys=cexp&affid=40838&AffiliateID=cx-40838_717172&cxd=cx-40838_717172&afi=28080&ar=&gclid=&lpr=%5Bafp2%5D&mmi=%5Bafp5%5D&MSCLKID=%5BMSCLKID%5D&utm_content=40838"
  },
  // {
  //   name: "Coral Casino",
  //   logo: "coral",
  //   bonus: "Play £10 Get 200 Free Spins",
  //   url: "https://www.coral.co.uk"
  // },
  // {
  //   name: "LottoGo Casino",
  //   logo: "lottogo",
  //   bonus: "100% Bonus Up to £200 + 300 Bonus Spins",
  //   url: "https://www.lottogo.com"
  // },
  // {
  //   name: "MrQ Casino",
  //   logo: "mrq",
  //   bonus: "Spend £10 Get 60 Spins No Wagering On Winnings",
  //   url: "https://www.mrq.com"
  // },
  // {
  //   name: "NetBet",
  //   logo: "netbet",
  //   bonus: "Up to 500 Free Spins On First Deposit",
  //   url: "https://www.netbet.co.uk"
  // }
];

// Generate casinos with auto-calculated id, rating, and badge
export const casinos: Casino[] = casinosRawData.map((casino, index) => {
  const rating = parseFloat((10 - index * 0.1).toFixed(1));
  
  return {
    id: generateIdFromName(casino.name) + index, // Include index to ensure uniqueness
    name: casino.name,
    logo: casino.logo,
    rating: rating,
    bonus: casino.bonus,
    url: casino.url,
    badge: index < 3 ? topBadges[index] : undefined,
    isMobile: casino.isMobile
  };
});

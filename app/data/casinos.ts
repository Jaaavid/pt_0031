import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
  id: number;
  name: string;
  logo: LogoKey | string;
  rating: number;
  votes: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
}

export const casinos: Casino[] = [
  {
    id: 1,
    name: "Bwin",
    logo: "/bwin.svg",
    rating: 9.9,
    votes: 9547,
    bonus: "Ganhe Até €300 + 25 Giros Grátis!",
    url: "https://www.bwin.pt",
    badge: "Operador em Destaque",
  },
];

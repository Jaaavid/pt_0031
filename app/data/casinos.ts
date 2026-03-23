import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
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
  // {
  //   name: "SafeCasino",
  //   logo: "/safecasino.png",
  //   rating: 10,
  //   votes: 9547,
  //   bonus: "100% up to 1000 EUR + 300 FREE SPINS",
  //   url: "https://safecasino.sedeciassls.live?sub_id_1=zlaeg1h19lmm22&utm_source=safecasino",
  //   badge: "Melhor Escolha",
  //   isMobile: true
  // },
  // {
  //   name: "Vegazone",
  //   logo: "/vegazone.svg",
  //   rating: 9.9,
  //   votes: 9547,
  //   bonus: "260% UP TO €2,600 + 260 FREE SPINS",
  //   url: "https://vegazone.sedeciassls.live?sub_id_1=zlaeg1h19lmm22&utm_source=vegazone",
  //   badge: "Grandes Bónus",
  //   isMobile: true
  // },
  // {
  //   name: "Aerobet",
  //   logo: "/aerobet.webp",
  //   rating: 9.7,
  //   votes: 9547,
  //   bonus: "UP TO 600% + 450 FREE SPINS",
  //   url: "https://aerobet.sedeciassls.live?sub_id_1=zlaeg1h19lmm22&utm_source=aerobet",
  //   badge: "Levantamento Instantâneo",
  //   isMobile: true
  // },
  // {
  //   name: "BetLabel",
  //   logo: "/betlabel.svg",
  //   rating: 9.8,
  //   votes: 9547,
  //   bonus: "100% up to 300€ + 30 free spins for a first deposit of 10 EUR",
  //   url: "https://betlabel.sedeciassls.live?sub_id_1=zlaeg1h19lmm22&utm_source=betlabel",
  //   badge: "Pagamentos Rápidos",
  //   isMobile: true
  // },
  // {
  //   name: "SilverPlay",
  //   logo: "/silverplay.svg",
  //   rating: 9.7,
  //   votes: 9547,
  //   bonus: "100% UP TO 500€ + 50 FREE SPINS",
  //   url: "https://silverplay.sedeciassls.live?sub_id_1=zlaeg1h19lmm22&utm_source=silverplay",
  //   badge: "Escolha High Roller",
  //   isMobile: true
  // },
  //
  // {
  //   name: "Bwin",
  //   logo: "/bwin.svg",
  //   rating: 9.9,
  //   votes: 9547,
  //   bonus: "Ganhe Até €300 + 25 Giros Grátis!",
  //   url: "https://www.bwin.pt",
  //   badge: "Operador em Destaque",
  // },



];

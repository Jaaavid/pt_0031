import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Logo from './components/Logo';
import MobileCasinoModal from './components/MobileCasinoModal';
import ExclusiveOfferPopup from './components/ExclusiveOfferPopup';
import { casinos } from './data/casinos';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  // const gclidParam = searchParams?.gclid;
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  // const gclid = Array.isArray(gclidParam) ? (gclidParam[0] || '') : (gclidParam || '');
  const headersList = await headers();


  const forwarded =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    headersList.get("cf-connecting-ip") ||
    headersList.get("true-client-ip") ||
    headersList.get("x-client-ip") ||
    "";

  let ip = forwarded ? forwarded.split(",")[0].trim() : '';
  console.log("User IP: ", ip);
  console.log('Gclid:', gclid);
  const userAgent = headersList.get("user-agent") || "";
  const referer = headersList.get("referer") || "";
  const hasGoogleReferrer = referer.toLowerCase().includes('google');

  console.log('referer:', referer);
  console.log('userAgent:', userAgent);
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const hasGclid = !!gclid;

  let isUk = true;
  let isRobot = false;
  let countryCode;
  if (ip && hasGclid ) {
    try {
      // ip='92.30.105.203';
      const response = await fetch(
        `https://api.ipregistry.co/${ip}?key=ira_Y0DeMHOImTGPOsq9l05XRwfHbGh6Xg3kQiCe`,
        { cache: 'no-store' }
      );
      if (!response.ok) {
        throw new Error(`IP registry error: ${response.status}`);
      }
      const data = await response.json();
      countryCode = data?.location?.country?.code;
      isUk = !['US','SG','IN','IE'].includes(countryCode);
      // isUk = data?.location?.country?.code === 'GB';
      const companyDomain = (data?.company?.domain || '').toLowerCase();
      const connectionDomain = (data?.connection?.domain || '').toLowerCase();
      const companyName = (data?.company?.name || '').toLowerCase();

      isRobot = companyDomain.includes("googl") || connectionDomain.includes("googl") || companyName.includes("googl")
        || companyDomain.includes("amazon") || companyDomain.includes("microsoft") ||  companyDomain.includes("bing");


    } catch (error) {
      console.error('Error fetching IP location:', error);
      // Default to false if API call fails
      isUk = true;
    }
  }

  const isOnline= hasGclid && !isRobot;
  // if (isOnline && countryCode === 'GB') {
  //   redirect(`https://topbritcasinos.com/B7W2b6jr?utm_target=vegas&gclid=${gclid}`);
  // }

  // Filter mobile casinos for the modal
  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);
  // Filter non-mobile casinos for the main page
  const regularCasinos = casinos.filter(casino => !casino.isMobile);
  // Get first casino for exclusive offer popup (VegasHero)
  const exclusiveCasino = casinos.find(casino => casino.name === 'Basswin') || mobileCasinos[0];
  
  return (
    <div className="min-h-screen bg-transparent">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />
      {/*<ExclusiveOfferPopup casino={exclusiveCasino} isOnline={isOnline} gclidValue={gclid} countryCode={countryCode} />*/}

      <Header />

      <section className="container mx-auto px-4 pb-6 pt-6 text-center sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-[#d4af37]/30 bg-[#0f261c]/80 px-4 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37] sm:text-sm">UK Card Room Picks</span>
          </div>
          <h1 className="mb-4 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover the <span className="bg-gradient-to-r from-[#f7d774] via-[#d4af37] to-[#b98a18] bg-clip-text text-transparent">Best Casino Cards</span> in the UK
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#e7dbc2]/78 sm:text-lg">
            Hand-picked platforms presented in a richer casino-table style, with bold offers, trusted ratings, and a more premium card-first layout.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-[22px] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(247,242,230,0.08),rgba(255,255,255,0.03))] px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <span className="mb-2 block text-lg text-[#d4af37]">♦</span>
              <span className="text-sm font-semibold text-white/85">UKGC Licensed</span>
            </div>
            <div className="rounded-[22px] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(247,242,230,0.08),rgba(255,255,255,0.03))] px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <span className="mb-2 block text-lg text-[#d4af37]">♠</span>
              <span className="text-sm font-semibold text-white/85">Expert Rated</span>
            </div>
            <div className="rounded-[22px] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(247,242,230,0.08),rgba(255,255,255,0.03))] px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <span className="mb-2 block text-lg text-[#d4af37]">♣</span>
              <span className="text-sm font-semibold text-white/85">Fast Withdrawals</span>
            </div>
          </div>
        </div>
      </section>

      <section id="casinos" className="container mx-auto px-4 pb-16">
        <div className="mb-4 text-center sm:mb-5 lg:mb-8">
          <h3 className="mb-2 text-xl font-extrabold tracking-[0.22em] text-[#d4af37] sm:mb-4 sm:text-2xl lg:text-4xl">
            Our Top Picks
          </h3>
          <p className="text-sm text-[#d9cfbc]/70 sm:text-base">Updated weekly based on payout speed and player support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {regularCasinos.map((casino, index) => (
            <CasinoCard
              key={casino.id}
              casino={casino}
              rank={index + 1}
              badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined}
            />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-6xl rounded-[26px] border border-[#d4af37]/12 bg-white/[0.04] p-3 shadow-sm sm:mt-12 sm:p-4 lg:mt-16 lg:p-6">
          <p className="text-center text-xs text-[#d9cfbc]/75 sm:text-sm">
            <strong>New customers only.</strong> 18+. T&Cs apply. BeGambleAware.org. Please play responsibly.
          </p>
        </div>
      </section>

      <section id="about" className="border-y border-[#d4af37]/10 bg-black/15 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="mb-4 text-center text-xl font-extrabold text-white sm:mb-6 sm:text-2xl lg:mb-8 lg:text-3xl">
            About Our Casino Comparison
          </h3>
          
          <div className="mb-6 rounded-[28px] border border-[#d4af37]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-sm sm:mb-8 sm:p-6 lg:p-8">
            <h4 className="mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl lg:text-2xl">
              Why Trust Our Reviews?
            </h4>
            <p className="mb-3 text-sm leading-relaxed text-[#e3d7c0]/78 sm:mb-4 sm:text-base">
              We provide independent, unbiased casino reviews to help UK players find safe and 
              reputable online casinos. Our team evaluates each casino based on licensing, game 
              variety, bonuses, payment methods, and customer support.
            </p>
            <ul className="space-y-2 text-sm text-[#e3d7c0]/78 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#d4af37]">✓</span>
                <span>All casinos are licensed by the UK Gambling Commission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#d4af37]">✓</span>
                <span>We verify security measures and fair play practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#d4af37]">✓</span>
                <span>Transparent reviews with no bias or favoritism</span>
              </li>
            </ul>
          </div>

          <div id="guide" className="rounded-[28px] border border-[#d4af37]/12 bg-[linear-gradient(135deg,rgba(10,24,18,0.96),rgba(20,49,37,0.96))] p-4 shadow-lg sm:p-6 lg:p-8">
            <h4 className="mb-3 text-lg font-bold text-[#d4af37] sm:mb-4 sm:text-xl lg:text-2xl">
              Responsible Gambling
            </h4>
            <p className="mb-3 text-sm leading-relaxed text-[#f3e7cf]/82 sm:mb-4 sm:text-base">
              We are committed to promoting responsible gambling. If you or someone you know 
              has a gambling problem, please seek help:
            </p>
            <ul className="space-y-2 text-sm text-[#f3e7cf]/82 sm:text-base">
              <li>• <strong>BeGambleAware:</strong> Visit{' '}
                <a href="https://www.begambleaware.org" className="text-[#f1d987] underline hover:text-[#fff1c1]">
                  begambleaware.org
                </a>
              </li>
              <li>• <strong>GamCare:</strong> Call 0808 8020 133 or visit{' '}
                <a href="https://www.gamcare.org.uk" className="text-[#f1d987] underline hover:text-[#fff1c1]">
                  gamcare.org.uk
                </a>
              </li>
              <li>• <strong>National Gambling Helpline:</strong> 0808 8020 133</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#d4af37]/15 bg-[#07140f]/95 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Logo className="rounded-full border border-[#d4af37]/20 bg-black/15 px-4 py-2" />
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 rounded-[28px] border border-[#d4af37]/12 bg-white/[0.03] p-5 sm:mb-8 sm:grid-cols-4 sm:gap-8 sm:p-8">
            <div>
              <h5 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">Quick Links</h5>
              <ul className="space-y-1 text-xs text-[#d9cfbc]/75 sm:space-y-2 sm:text-sm">
                <li><a href="#" className="hover:text-[#f1d987]">Home</a></li>
                <li><a href="#casinos" className="hover:text-[#f1d987]">Casinos</a></li>
                {/*<li><a href="#guide" className="hover:text-purple-400">Guide</a></li>*/}
              </ul>
            </div>
            <div>
              <h5 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">Legal</h5>
              <ul className="space-y-1 text-xs text-[#d9cfbc]/75 sm:space-y-2 sm:text-sm">
                <li><a href="/privacy" className="hover:text-[#f1d987]">Privacy</a></li>
                <li><a href="/terms" className="hover:text-[#f1d987]">Terms</a></li>
                <li><a href="#about" className="hover:text-[#f1d987]">About Us</a></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h5 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">Disclaimer</h5>
              <p className="text-xs leading-relaxed text-[#d9cfbc]/75 sm:text-sm">
                This is an information-based comparison website. All casinos listed are licensed 
                by the UK Gambling Commission. Gambling should be fun, not a way to make money. 
                Only gamble with money you can afford to lose.
              </p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-10 flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] sm:text-sm">
              Responsible Gambling
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="rounded-2xl border border-[#d4af37]/15 bg-white/[0.03] px-3 py-2">
                <svg width="48" height="48" viewBox="0 0 48 48" aria-label="18+ icon" role="img" className="w-10 h-10 text-slate-900">
                  <circle cx="24" cy="24" r="23" fill="#d9d9d9" />
                  <text x="24" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#000">
                    18+
                  </text>
                </svg>
              </div>
              <a 
                href="https://www.gamstop.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#d4af37]/15 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#f1d987]/60"
                aria-label="Visit GamStop"
              >
                <svg width="180" height="60" viewBox="0 0 180 60" role="img" aria-label="GAMSTOP">
                  <rect x="1" y="1" width="178" height="58" rx="10" fill="none" stroke="rgba(255,255,255,0.2)" />
                  <rect x="10" y="10" width="70" height="30" rx="6" fill="#6fc0e4" />
                  <rect x="80" y="10" width="90" height="30" rx="6" fill="#111" />
                  <text x="45" y="31" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800" fill="#000">
                    GAM
                  </text>
                  <text x="125" y="31" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800" fill="#fff">
                    STOP
                  </text>
                  <text x="90" y="48" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#fff">
                    ONLINE
                  </text>
                </svg>
              </a>
              <a 
                href="https://www.gambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#d4af37]/15 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#f1d987]/60"
                aria-label="Visit GambleAware"
              >
                <svg width="220" height="42" viewBox="0 0 320 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Safer Gambling">
                  <g clipPath="url(#clip0_12_3644)">
                    <path d="M0.924805 21.928C0.924805 7.54771 7.26436 0.300049 17.2649 0.300049C24.1859 0.300049 29.4187 3.63627 30.8703 11.1735L31.1028 12.3835L25.1723 13.6489L24.9397 12.558C23.833 7.49614 20.986 5.54042 17.1486 5.54042C11.7393 5.54042 7.43678 10.2016 7.43678 21.5313C7.43678 32.2302 11.3343 36.7169 16.7998 36.7169C20.6973 36.7169 25.2324 34.7056 25.2324 27.6285V26.4226H16.6835V21.4163H31.163V41.263H25.9863L25.6374 36.3718C23.7167 40.3387 19.9395 41.9533 15.5206 41.9533C6.68293 41.9454 0.924805 34.9873 0.924805 21.928Z" fill="white"/>
                    <path d="M53.486 38.4941C51.6816 40.3903 49.2998 41.8898 45.4624 41.9453C39.9969 41.9453 36.4482 38.3195 36.4482 33.6623C36.4482 28.6004 40.6947 26.125 44.4158 25.0897L53.4299 22.5587V21.5234C53.4299 18.3022 51.3929 16.6916 48.1971 16.6916C45.2298 16.6916 42.8479 18.5323 41.8014 20.603L41.6249 20.9481L37.0297 18.5323L37.3224 17.957C38.6015 15.3666 42.1502 11.8003 48.7183 11.8003C55.2865 11.8003 59.4767 15.081 59.4767 21.0037V36.1337C59.4767 37.5698 59.5369 39.4699 59.8256 40.7354L59.9419 41.2551H53.8951L53.8349 40.9655C53.6585 40.1602 53.5422 39.3549 53.486 38.4941ZM47.0302 37.3992C49.7048 37.3992 52.0906 35.8441 53.4259 34.178V26.9303L47.1465 28.8305C44.7646 29.5763 42.6675 30.7862 42.6675 33.2616C42.6675 35.737 44.3556 37.4032 47.0302 37.4032V37.3992Z" fill="white"/>
                    <path d="M94.5909 16.9812C92.209 16.9812 89.7069 18.5918 88.3114 19.9723V41.2551H82.2646V21.4084C82.2646 18.4728 80.7529 16.9773 77.8458 16.9773C75.4639 16.9773 72.9618 18.5879 71.5664 19.9684V41.2512H65.5195V12.4946H71.2777V15.6602C73.4871 13.3594 76.6268 11.8043 79.8828 11.8043C83.9528 11.8043 86.3947 13.645 87.5576 16.1759C89.767 13.5855 93.1393 11.8043 96.6279 11.8043C102.619 11.8043 105.061 15.7753 105.061 20.0874V41.2551H99.0137V21.4084C99.0137 18.4728 97.502 16.9773 94.5949 16.9773L94.5909 16.9812Z" fill="white"/>
                    <path d="M117.443 38.6091L116.861 41.255H111.745V0.990234H117.791V14.8548C119.536 12.8991 122.21 11.8042 125.001 11.8042C131.629 11.8042 136.108 16.6955 136.108 26.4741C136.108 36.2527 131.397 41.9493 124.769 41.9493C121.801 41.9493 119.071 40.7393 117.443 38.613V38.6091ZM123.606 37.1135C127.038 37.1135 129.945 34.0074 129.945 26.6447C129.945 19.282 126.922 16.6915 123.489 16.6915C121.164 16.6915 119.243 17.8419 117.791 19.3375V34.3525C119.303 35.9076 121.28 37.1135 123.606 37.1135Z" fill="white"/>
                    <path d="M141.105 0.990234H147.152V41.255H141.105V0.990234Z" fill="white"/>
                    <path d="M152.501 27.2795C152.501 18.1912 157.096 11.8043 165.12 11.8043C170.762 11.8043 176.688 15.1405 176.688 25.4944V28.1959H158.432V28.541C158.432 34.1225 161.399 37.2287 165.348 37.2287C167.907 37.2287 170.06 36.1933 171.512 33.6029L171.86 32.9681L176.628 34.9834L176.339 35.5586C174.186 39.8151 170.349 41.9454 165.176 41.9454C157.85 41.9454 152.501 36.824 152.501 27.2755V27.2795ZM170.99 24.2289V23.8243C170.99 18.5878 168.199 16.6321 165.12 16.6321C162.04 16.6321 159.013 18.933 158.492 24.2249H170.994L170.99 24.2289Z" fill="white"/>
                    <path d="M192.736 0.990479H201.517L213.029 41.2553H206.573L203.722 30.6714H190.233L187.382 41.2553H181.275L192.736 0.990479ZM202.331 25.7246L196.982 5.9373L191.633 25.7246H202.331Z" fill="#EB4A00"/>
                    <path d="M211.514 12.4945H217.561L222.328 33.0315L227.621 12.4945H233.319L238.496 33.0315L243.44 12.4945H248.966L241.463 41.2551H235.472L230.24 20.7775L224.947 41.2551H219.016L211.514 12.4945Z" fill="#EB4A00"/>
                    <path d="M266.809 38.4941C265.005 40.3903 262.623 41.8898 258.786 41.9453C253.32 41.9453 249.771 38.3195 249.771 33.6623C249.771 28.6004 254.014 26.125 257.739 25.0897L266.753 22.5587V21.5234C266.753 18.3022 264.716 16.6916 261.52 16.6916C258.557 16.6916 256.171 18.5323 255.125 20.603L254.952 20.9481L250.357 18.5323L250.65 17.957C251.929 15.3666 255.477 11.8003 262.046 11.8003C268.614 11.8003 272.804 15.081 272.804 21.0037V36.1337C272.804 37.5698 272.864 39.4699 273.153 40.7354L273.269 41.2551H267.222L267.162 40.9655C266.99 40.1602 266.873 39.3549 266.813 38.4941H266.809ZM260.357 37.3992C263.032 37.3992 265.418 35.8441 266.753 34.178V26.9303L260.474 28.8305C258.088 29.5763 255.995 30.7862 255.995 33.2616C255.995 35.737 257.683 37.4032 260.357 37.4032V37.3992Z" fill="#EB4A00"/>
                    <path d="M278.67 12.4945H284.312V17.9015C288.15 13.4704 291.582 12.1493 294.489 12.0898V17.6714C290.419 17.6714 287.219 19.9167 284.721 22.158V41.255H278.674V12.4945H278.67Z" fill="#EB4A00"/>
                    <path d="M295.123 27.2795C295.123 18.1912 299.718 11.8043 307.742 11.8043C313.383 11.8043 319.314 15.1405 319.314 25.4944V28.1959H301.057V28.541C301.057 34.1225 304.024 37.2287 307.978 37.2287C310.536 37.2287 312.69 36.1933 314.141 33.6029L314.49 32.9681L319.258 34.9834L318.969 35.5586C316.816 39.8151 312.978 41.9454 307.806 41.9454C300.48 41.9454 295.131 36.824 295.131 27.2755L295.123 27.2795ZM313.612 24.2289V23.8243C313.612 18.5878 310.821 16.6321 307.738 16.6321C304.654 16.6321 301.631 18.933 301.109 24.2249H313.612V24.2289Z" fill="#EB4A00"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_12_3644">
                      <rect width="318.385" height="41.6453" fill="white" transform="translate(0.924805 0.300049)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#d4af37]/15 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#f1d987]/60"
                aria-label="Visit GamCare"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 220 56" role="img" aria-label="GamCare">
                  <defs>
                    <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="60%" stopColor="#14b8a6"/>
                      <stop offset="100%" stopColor="#06b6d4"/>
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="218" height="54" rx="12" fill="none" stroke="rgba(255,255,255,0.14)"/>
                  <g transform="translate(14, 14)">
                    <path d="M14 24c-6.2-4.1-10-8.1-10-13 0-3.6 2.9-6.5 6.5-6.5 2.3 0 4.4 1.2 5.5 3.1 1.1-1.9 3.2-3.1 5.5-3.1C25.1 4.5 28 7.4 28 11c0 4.9-3.8 8.9-10 13l-2 1.3-2-1.3z" fill="url(#gc)"/>
                  </g>
                  <text x="58" y="35" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="22" fontWeight="800" fill="#ffffff">
                    GamCare
                  </text>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-[#d4af37]/10 pt-4 text-center sm:pt-6">
            <p className="text-xs text-[#b8ab92]/55 sm:text-sm">
              © 2026 britslot.com. For educational purposes only. 18+ only. Please gamble responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

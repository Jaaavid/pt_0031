'use client';

import { useMemo } from 'react';
import { Casino } from '../data/casinos';
import CasinoCard from './CasinoCard';
import Header from './Header';
import Footer from './Footer';

interface MobileCasinoModalProps {
  mobileCasinos: Casino[];
  isOnline: boolean;
  gclidValue?: string;
}

export default function MobileCasinoModal({ mobileCasinos, isOnline, gclidValue = '' }: MobileCasinoModalProps) {
  const isOpen = isOnline && mobileCasinos.length > 0;

  const updatedCasinos = useMemo(() => {
    if (!gclidValue) return mobileCasinos;
    return mobileCasinos.map(casino => ({
      ...casino,
      url: casino.url + `&gclid=${gclidValue}`
    }));
  }, [mobileCasinos, gclidValue]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0b1222]/95 backdrop-blur-md">
      <div className="min-h-screen w-full bg-transparent">
        {!isOnline && <Header />}

        <div className="border-b border-blue-500/10 bg-black/20 px-4 py-3 backdrop-blur sm:px-6">
          <div className="container mx-auto">
            <h1 className="mb-1 text-lg font-extrabold text-white sm:text-xl lg:text-2xl">
              Melhores Casinos Online 2026
            </h1>
            <h2 className="text-left font-extrabold text-blue-400 sm:text-xl">
              Descubra as melhores plataformas de casino e apostas com levantamentos rápidos e bónus de boas-vindas.
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 sm:gap-3 md:grid-cols-2">
            {updatedCasinos.map((casino, index) => (
              <CasinoCard
                isOnline={isOnline}
                key={index}
                casino={casino}
                rank={index + 1}
                badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : index === 3 ? 'fourth' : undefined}
              />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-blue-500/10 bg-white/[0.03] p-3 shadow-sm sm:mt-8 sm:p-4">
            <p className="text-center text-xs text-white/50 sm:text-sm">
              <strong>Novos utilizadores.</strong> 18+. Aplicam-se T&C. Jogue com responsabilidade.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

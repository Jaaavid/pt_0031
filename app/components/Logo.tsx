interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <img src="/favicon.ico" alt="Leading Casinos UK" width={40} height={40} className="rounded-full ring-2 ring-[#d4af37]/40" />
      </div>
      <div className="leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37]">
          Casino Guide
        </span>
        <span className="block text-white font-bold text-lg tracking-tight">
          UK Top Choices
        </span>
      </div>
    </div>
  );
}


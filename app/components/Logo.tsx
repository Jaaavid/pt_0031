interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 ring-2 ring-emerald-400/30">
          <span className="text-sm font-black text-white">GC</span>
        </div>
      </div>
      <div className="leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400">
          Guia Casinos
        </span>
        <span className="block text-lg font-bold tracking-tight text-white">
          Portugal
        </span>
      </div>
    </div>
  );
}

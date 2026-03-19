interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 ring-2 ring-blue-400/40">
          <span className="text-sm font-black text-white">GC</span>
        </div>
      </div>
      <div className="leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400">
          Guia Casinos
        </span>
        <span className="block text-lg font-bold tracking-tight text-white">
          Portugal
        </span>
      </div>
    </div>
  );
}

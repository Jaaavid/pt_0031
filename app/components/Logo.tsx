interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon/Symbol */}
      <div className="relative">
        <img src="/favicon.ico" alt="Leading Casinos UK" width={40} height={40} />
      </div>
      
      {/* Brand Name */}
      <span className="text-white font-bold text-lg tracking-tight">
        UK Casinos
      </span>
    </div>
  );
}


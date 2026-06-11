type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        className={compact ? "h-9 w-9" : "h-16 w-16 sm:h-20 sm:w-20"}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nullCatStroke" x1="22" y1="20" x2="98" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#30d4b4" />
            <stop offset="1" stopColor="#07977e" />
          </linearGradient>
          <filter id="nullCatGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.07 0 0 0 0 0.73 0 0 0 0 0.62 0 0 0 0.42 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M36 36L47 18L58 35"
          stroke="url(#nullCatStroke)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#nullCatGlow)"
        />
        <path
          d="M62 35L73 18L84 36"
          stroke="url(#nullCatStroke)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#nullCatGlow)"
        />
        <circle
          cx="60"
          cy="64"
          r="35"
          stroke="url(#nullCatStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#nullCatGlow)"
        />
        <path
          d="M36 88L84 40"
          stroke="url(#nullCatStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#nullCatGlow)"
        />
        <path
          d="M8 61H29M10 74L31 69M112 61H91M110 74L89 69"
          stroke="url(#nullCatStroke)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#nullCatGlow)"
        />
        <circle
          cx="48"
          cy="61"
          r="3.2"
          fill="#30d4b4"
          filter="url(#nullCatGlow)"
        />
        <circle
          cx="72"
          cy="61"
          r="3.2"
          fill="#30d4b4"
          filter="url(#nullCatGlow)"
        />
      </svg>
      <span
        className={
          compact
            ? "text-lg font-semibold tracking-[0.28em] text-frost"
            : "text-3xl font-semibold tracking-[0.32em] text-frost sm:text-5xl"
        }
      >
        Null Cat
      </span>
    </div>
  );
}

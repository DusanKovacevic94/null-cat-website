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
          <linearGradient id="catStroke" x1="20" y1="17" x2="98" y2="104" gradientUnits="userSpaceOnUse">
            <stop stopColor="#30d4b4" />
            <stop offset="1" stopColor="#07977e" />
          </linearGradient>
          <filter id="catGlow" x="-20%" y="-20%" width="140%" height="140%">
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
          d="M28 61V25L52.5 46H67.5L92 25V61C92 84.2 77.4 99 60 99C42.6 99 28 84.2 28 61Z"
          stroke="url(#catStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#catGlow)"
        />
        <path
          d="M10 67H30.5M12.5 80L34.5 73.5M110 67H89.5M107.5 80L85.5 73.5"
          stroke="url(#catStroke)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#catGlow)"
        />
        <circle
          cx="50.5"
          cy="63"
          r="3.4"
          stroke="url(#catStroke)"
          strokeWidth="2.6"
          filter="url(#catGlow)"
        />
        <circle
          cx="69.5"
          cy="63"
          r="3.4"
          stroke="url(#catStroke)"
          strokeWidth="2.6"
          filter="url(#catGlow)"
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

import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width={506}
        height={567}
        priority={compact}
        className={compact ? "h-10 w-9 object-contain" : "h-20 w-[4.5rem] object-contain sm:h-24 sm:w-[5.4rem]"}
      />
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

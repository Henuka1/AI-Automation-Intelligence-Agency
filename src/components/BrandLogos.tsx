import React from 'react';

export const AxonixLogo: React.FC<{ className?: string; textClassName?: string }> = ({
  className = 'w-6 h-6',
  textClassName = 'text-xl font-bold tracking-tight text-neutral-950',
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Sleek black geometric mark */}
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="14" cy="14" r="13" fill="#0A0A0A" />
          <path
            d="M9 18L14 9L19 18H15.5L14 14.5L12.5 18H9Z"
            fill="white"
          />
          <circle cx="14" cy="16" r="1.2" fill="#0A0A0A" />
        </svg>
      </div>
      <span className={textClassName}>
        Axonix<span className="text-neutral-900">.</span>
      </span>
    </div>
  );
};

export const LogoipsumBolt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs">
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M13 2.5L4 14H11.5L10 21.5L20 9.5H12.5L13 2.5Z" />
      </svg>
    </div>
    <span className="text-[19px] font-bold tracking-[-0.025em] text-black select-none">
      Logoipsum
    </span>
  </div>
);

export const LogoipsumClover: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs">
      <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <circle cx="8" cy="16" r="3" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    </div>
    <span className="text-[19px] font-bold tracking-[-0.025em] text-black select-none">
      Logoipsum
    </span>
  </div>
);

export const LogoipsumBear: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-1.5 shrink-0 ${className}`}>
    <span className="text-[20px] font-bold tracking-[-0.025em] text-black select-none">
      logo
    </span>
    <div className="w-7 h-7 flex items-center justify-center shrink-0 mx-0.5">
      <svg className="w-6 h-6 fill-black" viewBox="0 0 32 32">
        <path d="M7 6C5.343 6 4 7.343 4 9C4 10.386 4.935 11.554 6.215 11.895C6.075 12.88 6 13.91 6 15C6 21.075 10.477 26 16 26C21.523 26 26 21.075 26 15C26 13.91 25.925 12.88 25.785 11.895C27.065 11.554 28 10.386 28 9C28 7.343 26.657 6 25 6C23.614 6 22.446 6.935 22.105 8.215C20.25 7.45 18.18 7 16 7C13.82 7 11.75 7.45 9.895 8.215C9.554 6.935 8.386 6 7 6ZM16 17C17.657 17 19 18.119 19 19.5C19 20.881 17.657 22 16 22C14.343 22 13 20.881 13 19.5C13 18.119 14.343 17 16 17Z" />
      </svg>
    </div>
    <span className="text-[20px] font-bold tracking-[-0.025em] text-black select-none relative inline-flex items-center">
      ipsum
      <span className="text-[9px] font-bold -top-1 relative ml-0.5">™</span>
    </span>
  </div>
);

export const LogoipsumSunburst: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <rect
            key={deg}
            x="14.3"
            y="2"
            width="3.4"
            height="8"
            rx="1.7"
            fill="black"
            transform={`rotate(${deg} 16 16)`}
          />
        ))}
      </svg>
    </div>
    <span className="text-[19px] font-bold tracking-[-0.025em] text-black select-none">
      Logoipsum
    </span>
  </div>
);


export const LogoipsumDisc: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs">
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    </div>
    <span className="text-[19px] font-bold tracking-[-0.025em] text-black select-none">
      Logoipsum
    </span>
  </div>
);

export const LogoipsumDiamond: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 shrink-0 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs">
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path d="M12 3L2 12L12 21L22 12L12 3Z" />
      </svg>
    </div>
    <span className="text-[19px] font-bold tracking-[-0.025em] text-black select-none">
      Logoipsum
    </span>
  </div>
);

export const Logoipsum: React.FC<{ variant?: 1 | 2 | 3 | 4 | 5; className?: string }> = ({
  variant = 1,
  className = '',
}) => {
  if (variant === 1) return <LogoipsumBolt className={className} />;
  if (variant === 2) return <LogoipsumClover className={className} />;
  if (variant === 3) return <LogoipsumBear className={className} />;
  if (variant === 4) return <LogoipsumDisc className={className} />;
  return <LogoipsumDiamond className={className} />;
};


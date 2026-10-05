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

export const Logoipsum: React.FC<{ variant?: 1 | 2 | 3 | 4 | 5; className?: string }> = ({
  variant = 1,
  className = 'h-5 opacity-70 hover:opacity-100 transition-opacity',
}) => {
  if (variant === 1) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-4 h-4 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 9 9" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
        <span className="font-semibold tracking-tight text-sm text-neutral-800">logoipsum</span>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-4 h-4 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <span className="font-semibold tracking-tight text-sm text-neutral-800">logo&apos;ipsum&apos;</span>
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-4 h-4 rounded-full bg-neutral-900 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <span className="font-bold tracking-tight text-sm text-neutral-900">Logoipsum</span>
      </div>
    );
  }

  if (variant === 4) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg className="w-4 h-4 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
        <span className="font-semibold tracking-tight text-sm text-neutral-800">Logoipsum</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg className="w-4 h-4 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      </svg>
      <span className="font-semibold tracking-tight text-sm text-neutral-800">Logoipsum</span>
    </div>
  );
};

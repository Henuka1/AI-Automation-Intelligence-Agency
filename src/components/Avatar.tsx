import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name, className = 'w-9 h-9' }) => {
  const [hasError, setHasError] = useState(false);

  // Generate initials
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  // Pick deterministic neutral grayscale tone
  const colors = [
    'bg-neutral-800 text-white',
    'bg-neutral-700 text-neutral-100',
    'bg-neutral-900 text-white',
    'bg-neutral-600 text-neutral-50',
  ];
  const charCode = name.charCodeAt(0) || 0;
  const colorClass = colors[charCode % colors.length];

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 ring-1 ring-neutral-200/60 ${className} ${
        hasError || !src ? colorClass : 'bg-neutral-100'
      }`}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={name}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover grayscale contrast-110"
        />
      ) : (
        <span className="text-xs font-semibold tracking-wider">{initials}</span>
      )}
    </div>
  );
};

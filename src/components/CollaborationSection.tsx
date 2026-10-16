import React from 'react';
import { images } from '../assets/images';

interface CollaborationSectionProps {
  onBookDemo?: () => void;
  /** Optional avatar for the floating customer card. Falls back to a neutral silhouette. */
  avatarSrc?: string;
}

/**
 * Sizing system
 * --------------
 * Every size is written in "u" units (1u = 1 reference pixel of your design screenshot).
 *  - below lg  : 1u = 1px      (stacked mobile / tablet layout)
 *  - lg and up : 1u scales with the viewport (1px → 1.25px) so the whole section keeps
 *                the exact proportions of the reference and stays centred on any screen.
 */
const u = (n: number) => `calc(var(--u) * ${n})`;

const FALLBACK_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
      <rect width="88" height="88" fill="#d9d9dc"/>
      <circle cx="44" cy="34" r="15" fill="#3a3a3d"/>
      <path d="M12 88c0-18 14-30 32-30s32 12 32 30z" fill="#1c1c1e"/>
    </svg>`
  );

const fontStyle: React.CSSProperties = {
  fontFamily: "'Inter Tight', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const iconTileStyle: React.CSSProperties = {
  width: u(44),
  height: u(44),
  borderRadius: u(13),
  background: 'linear-gradient(165deg, #2d2d30 0%, #101012 100%)',
  boxShadow:
    '0 10px 18px -4px rgba(0,0,0,0.42), 0 2px 5px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.18)',
};

const iconSvgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'text-white',
  style: { width: u(20), height: u(20) } as React.CSSProperties,
};

const titleStyle: React.CSSProperties = {
  fontSize: u(16.5),
  fontWeight: 600,
  letterSpacing: '-0.02em',
  lineHeight: 1.25,
};

const descStyle: React.CSSProperties = {
  fontSize: u(13.5),
  lineHeight: 1.5,
  marginTop: u(6),
  maxWidth: u(440),
};

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({
  onBookDemo,
  avatarSrc,
}) => {
  return (
    <section
      className="bg-white py-14 sm:py-20 lg:py-[calc(var(--u)*80)] [--u:1px] lg:[--u:clamp(1px,0.105vw,1.25px)]"
      style={fontStyle}
    >
      {/* Scoped hover styles for icon tiles */}
      <style>{`
        .collab-icon {
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.28s ease;
          cursor: default;
        }
        .collab-icon:hover {
          transform: scale(1.16) translateY(-3px);
          box-shadow: 0 14px 28px -6px rgba(0,0,0,0.55),
                      0 4px 8px rgba(0,0,0,0.3),
                      inset 0 1px 0 rgba(255,255,255,0.28),
                      0 0 0 1.5px rgba(255,255,255,0.12);
        }
        .collab-icon:hover svg {
          transform: scale(1.08);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .collab-icon svg {
          transition: transform 0.28s ease;
        }
      `}</style>
      <div className="mx-auto w-full px-5 sm:px-6 max-w-[640px] lg:px-[calc(var(--u)*32)] lg:max-w-[calc(var(--u)*1200)]">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-y-0"
          style={{ columnGap: u(68) }}
        >
          {/* ───────── Left column ───────── */}
          <div className="min-w-0">
            {/* Pill badge */}
            <div
              className="inline-flex items-center rounded-full"
              style={{
                height: u(32),
                paddingLeft: u(14),
                paddingRight: u(18),
                gap: u(10),
                background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 55%, #f0f0f0 100%)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow:
                  'inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,.06), 0 6px 14px rgba(0,0,0,.08), 0 14px 26px rgba(0,0,0,.05)',
              }}
            >
              <svg
                style={{ width: u(15), height: u(15) }}
                viewBox="0 0 20 20"
                fill="none"
                stroke="#111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12.5" cy="12.5" r="4.5" />
                <path d="M7.8 3.5a1.5 1.5 0 0 1 2.6 0l4.3 7.2a1.5 1.5 0 0 1-1.3 2.3H4.8a1.5 1.5 0 0 1-1.3-2.3z" fill="#fff" />
              </svg>
              <span
                className="font-semibold uppercase leading-none"
                style={{ fontSize: u(12), color: '#1a1a1a', letterSpacing: '-0.02em' }}
              >
                Our Process
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                marginTop: u(18),
                letterSpacing: '-0.04em',
                lineHeight: 1.12,
                fontSize: 'clamp(36px, 4.0vw, 56px)',
                background: 'linear-gradient(180deg, rgba(20,20,20,.45) 0%, rgba(20,20,20,.6) 35%, #141414 85%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              <span className="block font-medium sm:whitespace-nowrap">A transparent process of</span>
              <span className="block font-semibold sm:whitespace-nowrap">collaboration and feedback</span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-[#55555c]"
              style={{ marginTop: u(18), fontSize: u(14.5), lineHeight: 1.55, maxWidth: u(530) }}
            >
              We are a forward-thinking AI agency focused on transforming businesses with
              intelligent automation, machine learning, and predictive analytics.
            </p>

            {/* Steps */}
            <div className="flex flex-col" style={{ marginTop: u(34), gap: u(26) }}>
              {/* Step 1 */}
              <div className="flex items-start" style={{ gap: u(18) }}>
                <div className="collab-icon flex items-center justify-center shrink-0" style={iconTileStyle}>
                  {/* Workflow nodes */}
                  <svg {...iconSvgProps}>
                    <circle cx="6.5" cy="6" r="2.5" />
                    <circle cx="6.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                    <path d="M6.5 8.5v6.5" />
                    <path d="M9 17.5h6" />
                  </svg>
                </div>
                <div className="min-w-0" style={{ paddingTop: u(2) }}>
                  <h3 className="text-[#101012]" style={titleStyle}>
                    Workflow Assessment
                  </h3>
                  <p className="text-[#64646b]" style={descStyle}>
                    We begin by examining your existing workflows to identify where AI can
                    deliver the greatest impact.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start" style={{ gap: u(18) }}>
                <div className="collab-icon flex items-center justify-center shrink-0" style={iconTileStyle}>
                  {/* Flexed arm */}
                  <svg {...iconSvgProps}>
                    <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
                    <path d="M15 14a5 5 0 0 0-7.584 2" />
                    <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
                  </svg>
                </div>
                <div className="min-w-0" style={{ paddingTop: u(2) }}>
                  <h3 className="text-[#101012]" style={titleStyle}>
                    Deploy with Confidence
                  </h3>
                  <p className="text-[#64646b]" style={descStyle}>
                    Our team develops custom AI systems built around your goals, ensuring safe
                    and reliable deployment.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start" style={{ gap: u(18) }}>
                <div className="collab-icon flex items-center justify-center shrink-0" style={iconTileStyle}>
                  {/* Headset */}
                  <svg {...iconSvgProps}>
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                  </svg>
                </div>
                <div className="min-w-0" style={{ paddingTop: u(2) }}>
                  <h3 className="text-[#101012]" style={titleStyle}>
                    Ongoing Support &amp; Optimization
                  </h3>
                  <p className="text-[#64646b]" style={descStyle}>
                    After deployment, we provide support and refine your AI systems to keep them
                    performing at their best.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: u(42) }}>
              <button
                onClick={() => {
                  if (onBookDemo) onBookDemo();
                  else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white font-medium transition-transform active:scale-[0.98]"
                style={{
                  height: u(46),
                  paddingLeft: u(28),
                  paddingRight: u(28),
                  borderRadius: u(12),
                  fontSize: u(14.5),
                  letterSpacing: '-0.01em',
                  background: 'linear-gradient(180deg, #2b2b2d 0%, #0c0c0e 100%)',
                  boxShadow:
                    '0 10px 22px -5px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.16)',
                }}
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* ───────── Right column: visual ───────── */}
          <div className="min-w-0 w-full max-w-[520px] mx-auto lg:max-w-none">
            {/* Outer bezel frame — concentric curved frame matching reference image */}
            <div
              className="relative w-full"
              style={{
                padding: u(10),
                borderRadius: u(36),
                background: 'linear-gradient(160deg, #ffffff 0%, #f1f1f5 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow:
                  '0 24px 60px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06), inset 0 1.5px 0 #ffffff',
              }}
            >
              {/* Inner card with handshake image */}
              <div
                className="relative w-full overflow-hidden aspect-[1/1.22]"
                style={{
                  borderRadius: u(26),
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)',
                }}
              >
                <img
                  src={images.collabHandsMesh}
                  alt="AI Collaboration Handshake"
                  className="w-full h-full object-cover object-bottom block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
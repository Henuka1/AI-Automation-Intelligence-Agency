import React from "react";
import { Cloud, Zap, Monitor, Loader2, Star, ShieldCheck } from "lucide-react";
import { servicesData, ServiceItem } from "../data/services";

interface ServicesSectionProps {
  onGetStarted?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onGetStarted }) => {
  const renderIcon = (iconName: ServiceItem["iconName"]) => {
    const cls = "w-[20px] h-[20px] text-white";
    switch (iconName) {
      case "zap": return <Zap className={cls} strokeWidth={1.75} />;
      case "monitor": return <Monitor className={cls} strokeWidth={1.75} />;
      case "loader":
        return (
          <svg
            className={cls}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {/* Outer arc */}
            <path d="M12 2.5 A9.5 9.5 0 1 0 21.5 12" />
            {/* Middle arc */}
            <path d="M12 6 A6 6 0 1 0 18 12" />
            {/* Inner arc */}
            <path d="M12 9.5 A2.5 2.5 0 1 0 14.5 12" />
          </svg>
        );
      case "star": return <Star className={cls} strokeWidth={1.75} />;
      case "shieldCheck": return <ShieldCheck className={cls} strokeWidth={1.75} />;
      default: return <Zap className={cls} strokeWidth={1.75} />;
    }
  };

  /* ─── Card style ─────────────────────────────────────────────────────── */
  const cardStyle: React.CSSProperties = {
    background: "#f0f0f0",
    border: "1.5px solid #ffffff",
    borderRadius: 20,
    padding: "26px 24px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(0, 0, 0, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.03)",
    cursor: "default",
  };

  /* ─── Icon-box style ─────────────────────────────────────────────────── */
  const iconBoxStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "linear-gradient(145deg, #1c1c1c 0%, #383838 100%)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginBottom: 34,
  };

  return (
    <section
      id="services"
      style={{ background: "#ffffff" }}
      className="py-16 sm:py-24 border-t border-neutral-100 overflow-hidden"
    >
      <div
        className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-8"
        style={{ marginInline: "auto" }}
      >

        {/* ── Badge ── */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-[7px] px-[14px] py-[6px] rounded-full bg-white border border-[#cfcfd4]"
            style={{
              boxShadow: "0 6px 20px -2px rgba(0, 0, 0, 0.14), 0 2px 6px -1px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Exact badge geometric icon: rounded triangle + overlapping circle */}
            <svg
              className="w-[14px] h-[14px] text-[#222]"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Overlapping circle at bottom right */}
              <circle cx="12.5" cy="12.5" r="4.5" />
              {/* Rounded triangle pointing up-left */}
              <path d="M7.8 3.5a1.5 1.5 0 0 1 2.6 0l4.3 7.2a1.5 1.5 0 0 1-1.3 2.3H4.8a1.5 1.5 0 0 1-1.3-2.3z" />
            </svg>
            <span
              className="text-[11px] font-semibold tracking-[0.11em] uppercase"
              style={{ color: "#222" }}
            >
              WHY CHOOSE US?
            </span>
          </div>
        </div>

        {/* ── Heading & Subtitle ── */}
        <div className="text-center mb-12 sm:mb-14">
          <h2
            className="leading-[1.12] tracking-[-0.03em]"
            style={{ fontSize: "clamp(34px, 4vw, 54px)" }}
          >
            <span style={{ color: "#666666", fontWeight: 500 }}>
              Unlock the potential of
            </span>
            <br />
            <span style={{ color: "#111111", fontWeight: 500 }}>
              AI for your business.
            </span>
          </h2>
          <p
            className="mt-4 leading-relaxed mx-auto"
            style={{
              color: "#737373",
              fontSize: "clamp(14.5px, 1.15vw, 16px)",
              maxWidth: 540,
            }}
          >
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* ── 3 × 2 Feature Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* ── Feature cards 1–5 ── */}
          {servicesData.map((service) => (
            <div
              key={service.id}
              style={cardStyle}
              className="group relative overflow-hidden min-h-[235px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_0_1.5px_#ffffff,0_20px_42px_-10px_rgba(0,0,0,0.11),0_8px_18px_-4px_rgba(0,0,0,0.05)] hover:bg-[#eaeaea]"
            >
              {/* Subtle top spotlight sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]" />

              {/* Icon box */}
              <div
                style={iconBoxStyle}
                className="relative z-10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
              >
                {renderIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3
                className="relative z-10 leading-snug mb-2.5 transition-colors duration-200 group-hover:text-black"
                style={{ color: "#18181b", fontWeight: 600, fontSize: 20.5 }}
              >
                {service.title}
              </h3>
              {/* Description */}
              <p
                className="relative z-10 leading-[1.6] transition-colors duration-200 group-hover:text-[#555]"
                style={{ color: "#828282", fontSize: 17.5 }}
              >
                {service.description}
              </p>
            </div>
          ))}

          {/* ── Card 6 — dark CTA ── */}
          <div
            className="group flex flex-col justify-between min-h-[235px]"
            style={{
              background: "#121212",
              border: "1.5px solid #ffffff",
              borderRadius: 20,
              padding: "28px 28px 32px",
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 25px -4px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Text - 3 lines matching reference image */}
            <p className="leading-[1.55]" style={{ fontSize: "clamp(15.5px, 1.25vw, 17px)" }}>
              <span className="block text-white font-semibold">
                {"We\u2019ve partnered with companies in"}
              </span>
              <span className="block mt-0.5">
                <span className="text-white font-bold">e-commerce</span>{" "}
                <span className="text-[#888888] font-normal transition-colors duration-200 group-hover:text-white">
                  and more to deliver
                </span>
              </span>
              <span className="block mt-0.5 text-[#888888] font-normal transition-colors duration-200 group-hover:text-white">
                transformative AI solutions.
              </span>
            </p>

            {/* Button */}
            <div style={{ marginTop: 28 }}>
              <button
                onClick={() => {
                  if (onGetStarted) onGetStarted();
                  else document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "#ffffff",
                  color: "#111111",
                  borderRadius: 12,
                  padding: "13px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#f2f2f2";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

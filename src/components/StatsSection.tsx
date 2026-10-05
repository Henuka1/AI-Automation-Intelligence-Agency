import React from 'react';
import { images } from '../assets/images';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Large Rounded Container Card */}
        <div className="bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Subtle concentric wave overlay */}
          <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />

          {/* Heading */}
          <h2 className="relative text-2xl sm:text-3xl md:text-[34px] font-medium text-[#111113] tracking-tight leading-tight max-w-xl mx-auto">
            Empowering the Future
            <br />
            with Artificial Intelligence
          </h2>

          {/* 3D Geometric Cube Matrix Asset */}
          <div className="relative my-8 sm:my-12 flex justify-center">
            <div className="w-56 sm:w-72 md:w-80 max-w-full aspect-square relative">
              <img
                src={images.cubeMatrix}
                alt="3D isometric geometric cube matrix AI object"
                className="w-full h-full object-contain filter grayscale contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bottom 3 Statistic Cards */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-4">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111113] tabular-nums">
                $5M<span className="text-neutral-500 font-normal">+</span>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 font-medium">
                Performance Snapshot
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111113] tabular-nums">
                244<span className="text-neutral-500 font-normal">+</span>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 font-medium">
                Digital Reach
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5 duration-200">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111113] tabular-nums">
                97<span className="text-neutral-500 font-normal">%</span>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 font-medium">
                Client Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

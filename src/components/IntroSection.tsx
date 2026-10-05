import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const INTRO_TEXT =
  'We are a forward-thinking AI agency focused on transforming businesses with intelligent automation, machine learning, and predictive analytics. Our team of data scientists, engineers, and creatives craft tailored AI solutions that solve real-world challenges across industries.';

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  // Smoothly illuminate each word from faint grey (0.24 opacity) to deep bold black (1 opacity)
  const opacity = useTransform(progress, range, [0.24, 1]);
  const color = useTransform(progress, range, ['#A1A1AA', '#0B0C0E']);

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.05em] select-none">
      <motion.span
        style={{ opacity, color }}
        className="transition-colors duration-100 font-semibold"
      >
        {word}
      </motion.span>
    </span>
  );
};

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll position of the section through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.82', 'end 0.45'],
  });

  const words = INTRO_TEXT.split(' ');
  const total = words.length;

  return (
    <section
      id="about"
      ref={containerRef}
      className="pt-10 sm:pt-14 pb-4 sm:pb-6 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Eyebrow badge matching screenshot */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mb-8 sm:mb-10 transition-transform hover:scale-105">
          <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
            ABOUT US
          </span>
        </div>

        {/* Scroll-driven progressive text illumination matching screenshot */}
        <div className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-[1.3] tracking-[-0.025em] font-sans text-center">
          <p className="flex flex-wrap items-center justify-center">
            {words.map((word, i) => {
              const start = i / total;
              const end = Math.min(1, start + 1.8 / total);
              return (
                <Word
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

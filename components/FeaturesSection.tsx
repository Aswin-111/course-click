'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Stagger, Reveal, slideUp } from './animations';
import { easeInOut } from 'framer-motion'
const features = [
  {
    id: 'case-management',
    icon: '/images/icons/case-management.svg',
    title: 'Case Management',
    description: 'Track, update, and manage your court cases - all in one place.',
  },
  {
    id: 'certified-true-copy',
    icon: '/images/icons/certified-true-copy.svg',
    title: 'Certified True Copy',
    description: 'Get your official court judgment copy without stepping into court.',
  },
  {
    id: 'esign',
    icon: '/images/icons/esign.svg',
    title: 'eSign',
    description: 'Sign vakalats & legal documents digitally - no printer, no court visit.',
  },
  {
    id: 'notarise',
    icon: '/images/icons/notarise.svg',
    title: 'Notarise',
    description: 'Get notified instantly if an FIR is registered in your name - stay informed, stay protected.',
  },
];

/** Client-only randomized wobble on hover (no style changes) */
function WobbleOnHover({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  const [amp, setAmp] = useState<number | null>(null);
  const [dur, setDur] = useState<number | null>(null);

  useEffect(() => {
    const r = Math.random;
    setAmp(Math.round((4 + (10 - 4) * r()) * 10) / 10);           // amplitude 4..10px
    setDur(Math.round((0.9 + (1.4 - 0.9) * r()) * 100) / 100);    // duration 0.9..1.4s
  }, []);

  const animate = hover && amp != null ? { y: [0, -amp, 0, amp, 0] } : { y: 0 };
  // const transition = hover && dur != null ? { duration: dur, ease: 'easeInOut', repeat: Infinity } : undefined;

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={animate}
      transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#F8F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Reveal once={false}>
            <p className="text-[#818181]/50 text-[20px] leading-[32px] font-medium text-center font-inter">
              Key Features
            </p>
          </Reveal>

          <Reveal once={false}>
            <h2 className="text-[#11060C] font-urbanist text-[40px] font-extralight leading-[56px] mt-3">
              Experience a
            </h2>
          </Reveal>

          <Reveal once={false}>
            <h2 className="text-[#11060C] font-urbanist text-[40px] font-bold leading-[56px]">
              Modern Legal-Tech Solution
            </h2>
          </Reveal>

          <Reveal once={false}>
            <p className="text-[#555] text-[20px] leading-[24px] font-urbanist font-medium text-center mt-4 max-w-3xl mx-auto">
              Designed to simplify, support, and speed up every step of your legal journey - wherever you are.
            </p>
          </Reveal>

          <Reveal once={false}>
            <button className="relative mt-10 inline-flex items-center justify-center px-10 py-3 text-[16px] font-urbanist font-bold text-[#EDE8EB] rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-[#50223C]"></span>
              <span className="relative z-10">Explore Now</span>
            </button>
          </Reveal>
        </div>

        {/* Features Grid */}
        <Stagger once={false} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <WobbleOnHover key={feature.id}>
              <motion.div
                variants={slideUp}
                className="bg-[#F9F9F9] rounded-[24px] p-8 h-[283px] transition-all duration-300 hover:shadow-[0_4px_40px_rgba(0,0,0,0.08)] flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                  </div>
                </div>

                <h3 className="text-[#000] text-[18px] font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#555] text-[14px] leading-[20px] mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="flex items-center space-x-3 mt-auto">
                  <a
                    href="#"
                    className="flex-1 border border-[#50223C] text-[#50223C] text-[14px] font-bold py-2.5 rounded-full flex justify-center items-center hover:bg-[#50223C] hover:text-white transition-all"
                  >
                    Know more
                  </a>

                  <a
                    href="#"
                    aria-label="Open feature"
                    className="w-12 h-12 rounded-full border border-[#50223C] flex items-center justify-center transition-all hover:bg-[#50223C] hover:text-white"
                  >
                    <svg
                      className="w-[17px] h-[17px] text-[#50223C] group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </WobbleOnHover>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

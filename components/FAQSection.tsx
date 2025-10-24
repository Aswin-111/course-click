'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, Stagger, slideUp } from './animations'

type FAQItem = { id: number; question: string; answer: string }

export default function FAQSection() {
  // “02” open by default (index 1)
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const faqs: FAQItem[] = [
    {
      id: 0,
      question: 'How do I track my case?',
      answer:
        "You can track your case by entering your CNR (Case Number Reference) or case number in the Court Click app. Once entered, you'll receive real-time updates about hearings, orders, and judgments directly on your dashboard.",
    },
    {
      id: 1,
      question: 'What kind of updates will I get?',
      answer:
        "You'll be notified about hearing dates, orders, next posting, progress, and court hall info.",
    },
    {
      id: 2,
      question: 'How do I request a CTC?',
      answer:
        "You can request a Certified True Copy (CTC) directly through the Court Click app. Navigate to your case details, select the document you need, and submit a CTC request. You'll be notified once it's ready for collection or delivery.",
    },
    {
      id: 3,
      question: 'How do alerts work?',
      answer:
        "Court Click sends you automated push notifications and email alerts whenever there's an update in your case. You can customize which alerts you want to receive in the app settings to stay informed about important developments.",
    },
    {
      id: 4,
      question: 'How do I contact support?',
      answer:
        "Our support team is available 24/7. You can reach us through the in-app chat, email us at support@courtclick.com, or call us at +91 9746214172. We're here to help with any questions or issues you may have.",
    },
  ]

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="w-full bg-[#FAF9FA]">
      {/* Responsive stage wrapper (doesn't change your inner styles) */}
      <div className="faq-stage-wrapper">
        {/* 1440 × 940 artboard emulation (kept as-is) */}
        <div className="mx-auto max-w-[1440px] h-[940px] flex flex-col justify-start px-[80px] py-[72px]">
          {/* Header */}
          <div className="text-center max-w-[720px] mx-auto">
            <Reveal once={false}>
              <p className="font-inter text-[12px] tracking-[0.12em] uppercase text-[#B9B2B6] mb-4">
                FAQ
              </p>
            </Reveal>

            <Reveal once={false}>
              <h2 className="font-urbanist text-[#11060C] text-[40px] leading-[56px] font-[200]">
                Got Questions?
              </h2>
            </Reveal>

            <Reveal once={false}>
              <h3 className="font-urbanist text-[#11060C] text-[40px] leading-[56px] font-[700] mt-1">
                We’ve Got You Covered.
              </h3>
            </Reveal>

            <Reveal once={false}>
              <p className="font-inter text-[14px] leading-[22px] text-[#8C858A] mt-4">
                From case tracking to certified copies – find answers to everything you need to know.
              </p>
            </Reveal>
          </div>

          {/* List */}
          <div className="mt-10">
            <Stagger once={false} className="space-y-3">
              {faqs.map((faq, i) => {
                const active = openIndex === i
                const btnId = `faq-btn-${i}`
                const panelId = `faq-panel-${i}`
                // reduced motion check (no visual change; just gentler animation if preferred)
                const prefersReduced =
                  typeof window !== 'undefined' &&
                  window.matchMedia &&
                  window.matchMedia('(prefers-reduced-motion: reduce)').matches

                return (
                  <motion.div
                    key={faq.id}
                    variants={slideUp}
                    className={[
                      'rounded-2xl border transition-colors',
                      active
                        ? 'bg-[#F0EAF0] border-transparent'
                        : 'bg-white border-[#EEE8EC] hover:border-[#E2DADF]',
                    ].join(' ')}
                  >
                    {/* Row / button */}
                    <button
                      id={btnId}
                      aria-expanded={active}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-6 px-6 py-6 text-left"
                    >
                      {/* index */}
                      <span className="w-[36px] shrink-0 text-[12px] font-medium text-[#AAA1A6]">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* question */}
                      <span className="flex-1 font-urbanist text-[16px] lg:text-[16px] text-[#11060C] font-[600]">
                        {faq.question}
                      </span>

                      {/* icon */}
                      <motion.span
                        aria-hidden
                        animate={{ rotate: active ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="ml-4 inline-flex h-6 w-6 items-center justify-center text-[#6D5B65]"
                      >
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.span>
                    </button>

                    {/* answer */}
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={
                            prefersReduced
                              ? { duration: 0.2 }
                              : { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
                          }
                        >
                          <div className="px-6 pb-6">
                            <div className="pl-[48px]">
                              <p className="font-inter text-[14px] leading-[22px] text-[#6B6468]">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>

      {/* Scoped responsive scaler – keeps your exact UI, just fits any screen */}
      <style jsx>{`
        .faq-stage-wrapper {
          /* Scale relative to the original 1440×940 artboard */
          --faq-scale: clamp(0.72, min(100vw / 1440, 100vh / 940), 1.6);
          display: flex;
          justify-content: center;
          width: 100%;
          transform: scale(var(--faq-scale));
          transform-origin: top center;
          will-change: transform;
        }

        /* Slight tweaks for common viewports */
        @media (min-width: 1920px) and (min-height: 1080px) {
          .faq-stage-wrapper { --faq-scale: clamp(0.9, min(100vw / 1440, 100vh / 940), 1.35); }
        }
        @media (min-width: 2560px) and (min-height: 1300px) {
          .faq-stage-wrapper { --faq-scale: clamp(1, min(100vw / 1440, 100vh / 940), 1.5); }
        }
        @media (min-width: 3840px) and (min-height: 2000px) {
          .faq-stage-wrapper { --faq-scale: 1.6; }
        }
      `}</style>
    </section>
  )
}

"use client";

import * as React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";

// 🌀 From your Figma prototype, centralized for consistency
export const figmaEase = [0.85, -0.01, 0.31, 0.98] as const;
export const figmaDuration = 1; // 1000ms in seconds

// 🔸 --- CORE ANIMATION VARIANTS --- 🔸
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: figmaDuration, ease: figmaEase },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: figmaDuration, ease: figmaEase },
  },
};

// 🌟 --- REUSABLE ANIMATION COMPONENTS --- 🌟

/**
 * A generic component to reveal elements on scroll.
 * Combines SlideUp and FadeIn logic into one flexible component.
 * @example
 * // Defaults to slideUp animation
 * <Reveal>Some content</Reveal>
 *
 * // Use fadeIn animation instead
 * <Reveal variants={fadeIn}>Some content</Reveal>
 */
export function Reveal({
  children,
  as: Tag = "div",
  variants = slideUp,
  once = true,
  amount = 0.2,
  margin = "-15% 0px -15% 0px",
  ...props
}: React.ComponentProps<typeof motion.div> & {
  as?: React.ElementType;
  variants?: any;
  once?: boolean;
  amount?: number;
  margin?: string;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once, amount, margin });

  return (
    <motion.div
      ref={ref}
      as={Tag}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      // Note: transition is now defined within variants for better control
      style={{ willChange: "transform, opacity" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * A container that staggers the animation of its direct children.
 * Children should be `motion` components.
 */
export function Stagger({
  children,
  className = "grid",
  stagger = 0.08,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  margin = "-15% 0px -15% 0px",
  ...props
}: React.ComponentProps<typeof motion.div> & {
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount, margin });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wraps the main layout to provide smooth page transitions on route changes.
 */
export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.5, ease: figmaEase }} // Faster page transition
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

/**
 * A button with hover and tap animations.
 */
export function AnimatedButton({
  children,
  className = "",
  ...props
}: React.ComponentProps<typeof motion.button>) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-2xl px-5 py-3 font-medium ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Renders a Lottie animation from a JSON file.
 */
export function LottiePlayer({
  json,
  loop = true,
  autoplay = true,
  className = "w-64 h-64",
}: {
  json: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}) {
  return (
    <Lottie
      animationData={json}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}

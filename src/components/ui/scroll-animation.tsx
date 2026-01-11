"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "stagger";
  delay?: number;
  duration?: number;
  viewport?: { once?: boolean; margin?: string };
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export function ScrollAnimation({
  children,
  className,
  variant = "slide-up",
  delay = 0,
  duration = 0.5,
  viewport = { once: true, margin: "-10%" },
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport as any);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Cubic bezier for smooth "Apple-like" feel
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Wrapper for staggered children animations
export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  viewport = { once: true, margin: "-10%" },
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  viewport?: { once?: boolean; margin?: string };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport as any);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, variant = "slide-up" }: ScrollAnimationProps) {
  return (
    <motion.div variants={variants[variant]} className={cn(className)} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

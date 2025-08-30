"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* Hook that restarts animation whenever section enters view */
function useInViewAnimation(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50); // restart animation
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface AnimatedWrapperProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "fadeIn";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedWrapper({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.9,
  className = "",
}: AnimatedWrapperProps) {
  const { ref, inView } = useInViewAnimation();

  const variants: Record<string, any> = {
    fadeUp: { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

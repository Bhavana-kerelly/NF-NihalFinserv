"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useInView,
  useMotionValueEvent,
} from "framer-motion";

// 🔢 Counter Component with restart on scroll
function Counter({
  from,
  to,
  duration = 2,
  className,
}) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  // Sync motion value with React state
  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(from); // reset when out of view
    }
  }, [inView, count, to, from, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default function SoftwareOutsourcing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className="bg-[#132b4a] text-white flex items-center justify-center py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -80 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-white bg-clip-text text-transparent">
                Wide Range Of Loan Options With Your Trusted Financial Consultant
              </h1>

              <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                Explore a wide range of loan solutions tailored to your needs — from personal and business loans to home and vehicle financing.
                As your trusted financial consultant, we simplify the process, offer expert guidance, and connect you with the best options in the market.
                Whether you're planning, expanding, or investing — we’re here to make it happen, seamlessly.
              </p>
            </motion.div>

            {/* Right side - Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-left">
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <Counter from={0} to={100000} />+
                </div>
                <div className="text-gray-400 text-lg">Loans Dispersed</div>
              </div>

              <div className="text-left">
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <Counter from={0} to={100000} />+
                </div>
                <div className="text-gray-400 text-lg">Customers</div>
              </div>

              <div className="text-left">
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <Counter from={0} to={10} />+
                </div>
                <div className="text-gray-400 text-lg">Cities Served</div>
              </div>

              <div className="text-left">
                <div className="text-6xl lg:text-7xl font-bold mb-2">
                  <Counter from={0} to={75} />+
                </div>
                <div className="text-gray-400 text-lg">Associated with Companies</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

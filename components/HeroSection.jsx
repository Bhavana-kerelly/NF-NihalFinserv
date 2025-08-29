"use client";

import React, { Fragment, useEffect, useState } from "react";
import { FaHandHoldingUsd, FaFileAlt, FaGlobeAmericas } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import GlobeAnimation from "./GlobeAnimation";

export default function HeroSection() {
  const features = [
    {
      icon: <FaHandHoldingUsd size={40} className="text-white" />,
      title: (
        <>
          Very Low Rates
          <br />
          on All Loans
        </>
      ),
    },
    {
      icon: <FaFileAlt size={40} className="text-white" />,
      title: "99.9% Success Rate Guarantee",
    },
    {
      icon: <FaGlobeAmericas size={40} className="text-white" />,
      title: "Flexible with Your Repayments",
    },
  ];

  // Cursor follower state
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {showHero && (
        <motion.section
          className="relative bg-[#132b4a] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between min-h-[400px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {/* Cursor Glow */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500/30 blur-3xl"
            animate={{ x: cursor.x - 40, y: cursor.y - 40 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />

          {/* Text Block */}
          <motion.div
            className="max-w-xl text-center md:text-left md:ml-10 relative z-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl font-bold leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: -40 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 20px rgba(255,255,255,0.6)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3,
              }}
            >
              Plan For Tomorrow
              <br /> and Choose the
              <br /> Right Loan
            </motion.h1>

            <motion.p
              className="text-sm mb-5 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Nihal Finserv, we make borrowing simple and stress-free.
              Whether you need a personal loan, home loan, car loan, or help
              choosing the right investment, we’re here to guide you.
            </motion.p>

            <motion.p
              className="text-sm mb-6 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We work closely with trusted banks and NBFCs to help you find the
              best financial solutions — quickly, transparently, and with
              personal attention.
            </motion.p>

            <motion.p
              className="text-xl mb-7 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                color: ["#d1d5db", "#f3f4f6", "#d1d5db"], // loop fade effect
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 2,
                delay: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Your goals matter. Let’s finance them, together.
            </motion.p>

            {/* Features Block */}
            <motion.div
              className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 bg-[#132b4a] py-10 px-4 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {features.map((feature, index) => (
                <Fragment key={index}>
                  <motion.div
                    className="flex items-center text-white max-w-sm gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.05, 1],
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 2,
                      delay: 1 + index * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <div>{feature.icon}</div>
                    <p className="text-sm">{feature.title}</p>
                  </motion.div>

                  {/* Divider */}
                  {index < features.length - 1 && (
                    <>
                      <div className="hidden md:block h-10 border-l border-gray-700 mx-4" />
                      <div className="block md:hidden w-full border-t border-gray-700 my-4" />
                    </>
                  )}
                </Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Globe Animation */}
          <motion.div
            className="mt-10 mr-10 md:mt-0 w-full md:w-1/2 lg:w-2/5 aspect-square max-w-[500px] flex items-center justify-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1], // pulsing loop
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1, repeat: Infinity }}
          >
            <GlobeAnimation />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

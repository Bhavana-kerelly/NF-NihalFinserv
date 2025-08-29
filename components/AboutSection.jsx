"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // 👈 restarts each time visible

  // Parent stagger animation
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black flex flex-col md:flex-row items-center gap-10 overflow-hidden"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // 👈 restart on scroll
      exit="exit"
    >
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-1/2 relative"
        variants={child}
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <motion.div
          className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <img
          src="/images/About.jpg" // Replace with your actual image
          alt="Office"
          className="relative rounded-2xl shadow-xl object-cover w-full h-[300px] md:h-[400px]"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div className="w-full md:w-1/2 space-y-5" variants={child}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gray-900 bg-clip-text text-transparent"
          variants={child}
        >
          Personal Loans in Hyderabad – Nihal Finserv
        </motion.h2>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-700"
          variants={child}
        >
          Looking for a quick and affordable personal loan in Hyderabad? Nihal
          Finserv is here to help. We offer personalized loan solutions for
          salaried and self-employed individuals with competitive interest rates
          and a smooth, hassle-free process.
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-700"
          variants={child}
        >
          Whether it’s for medical bills, education, travel, or urgent expenses
          — we’re committed to making borrowing simple, fast, and transparent.
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-700"
          variants={child}
        >
          Based in Hyderabad, Nihal Finserv is dedicated to supporting your
          financial needs with trusted service and minimal paperwork.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const articles = [
  {
    title: "Structured Loans: Customized Financial Solutions by Nihal Finserv",
    image:
      "https://img.freepik.com/free-vector/isometric-family-budget-composition-with-people-counting-money-vector-illustration_1284-80992.jpg?semt=ais_hybrid&w=740&q=80",
    slug: "structured-loans",
  },
  {
    title: "Nihal Finserv – Your Trusted Financial Partner in Achieving Dreams",
    image: "https://www.cfoselections.com/hubfs/Images/integrity-in-finance.jpeg",
    slug: "financial-partner",
  },
  {
    title: "Nihal Finserv – Driven by Values, Focused on You",
    image:
      "https://images.moneycontrol.com/static-mcnews/2018/10/Loans-2-final-770x433.png?impolicy=website&width=770&height=431",
    slug: "driven-by-values",
  },
  {
    title: "Professional Loans for Doctors and CAs – Empowering Growth",
    image:
      "https://media.assettype.com/outlookmoney/2025-01-31/104ynhsa/Untitled-design-8.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.05",
    slug: "loans-for-doctors-cas",
  },
];

// Animations
const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: 30 },
};

export default function FeaturedInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // restart on scroll

  return (
    <motion.div
      ref={ref}
      className="py-20 px-6 max-w-7xl mx-auto font-sans"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Blogs
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Explore our comprehensive blog posts today and let Nihal Finserv guide you
        towards smarter financial decisions.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
      >
        {articles.map((item, i) => (
          <motion.div key={i} variants={card}>
            <Link href={`/blog/${item.slug}`}>
              <motion.div
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl cursor-pointer group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-purple-600 transition">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

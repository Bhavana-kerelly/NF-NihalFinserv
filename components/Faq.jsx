"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Why should I choose Nihal Finserv over other financial consultants?",
    answer:
      "Nihal Finserv offers a personalized, transparent, and strategic approach to financial consulting. As an authorized channel partner with leading banks and NBFCs, we bring direct access to multiple loan options, expert structuring, and faster approvals — all under one roof.",
  },
  {
    question: "What makes Nihal Finserv trustworthy and reliable?",
    answer:
      "We operate strictly under RBI guidelines, ensuring compliance and transparency in every transaction. Our credibility stems from years of experience, a strong partner network, and a customer-first approach that prioritizes ethical practices and financial clarity.",
  },
  {
    question: "Does Nihal Finserv help with only one type of loan?",
    answer:
      "No — we specialize in a wide range of loan solutions, including personal loans, business loans, home loans, working capital, and structured loans. Whether you’re an individual or a business, we offer customized financing strategies tailored to your unique needs.",
  },
  {
    question: "How does Nihal Finserv simplify the loan process?",
    answer:
      "From understanding your financial goal to identifying the right lender, preparing documentation, ensuring RBI compliance, and supporting disbursement — we offer end-to-end assistance. Our team does the heavy lifting so you can stay focused on your financial growth.",
  },
  {
    question: "Can I trust Nihal Finserv to get me better loan terms?",
    answer:
      "Absolutely. With strong partnerships across multiple banks and NBFCs, we’re in a position to negotiate competitive interest rates, flexible tenures, and favorable terms — often better than going directly to a lender.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ fixed
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-start justify-between px-6 py-16 max-w-7xl mx-auto"
    >
      <div className="w-full lg:w-1/2">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.h2>

        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`border-b ${
              index === activeIndex ? "border-red-500" : "border-gray-300"
            } py-4 cursor-pointer`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-semibold text-lg ${
                  index === activeIndex ? "text-red-500" : "text-black"
                }`}
              >
                {faq.question}
              </p>
              <span className="text-xl">{index === activeIndex ? "−" : "+"}</span>
            </div>
            {index === activeIndex && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gray-600 mt-3 text-sm leading-relaxed"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

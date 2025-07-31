"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Why should I choose Nihal Finserv over other financial consultants?",
    answer:
      "Nihal Finserv offers a personalized, transparent, and strategic approach to financial consulting. As an authorized channel partner with leading banks and NBFCs, we bring direct access to multiple loan options, expert structuring, and faster approvals — all under one roof.",
  },
  {
    question: "What makes Nihal Finserv trustworthy and reliable?",
    answer: "We operate strictly under RBI guidelines, ensuring compliance and transparency in every transaction. Our credibility stems from years of experience, a strong partner network, and a customer-first approach that prioritizes ethical practices and financial clarity.",
  },
  {
    question: "Does Nihal Finserv help with only one type of loan?",
    answer: "No — we specialize in a wide range of loan solutions, including personal loans, business loans, home loans, working capital, and structured loans. Whether you’re an individual or a business, we offer customized financing strategies tailored to your unique needs",
  },
  {
    question: "How does Nihal Finserv simplify the loan process?",
    answer: "From understanding your financial goal to identifying the right lender, preparing documentation, ensuring RBI compliance, and supporting disbursement — we offer end-to-end assistance. Our team does the heavy lifting so you can stay focused on your financial growth.",
  },
  {
    question: "Can I trust Nihal Finserv to get me better loan terms?",
    answer: "Absolutely. With strong partnerships across multiple banks and NBFCs, we’re in a position to negotiate competitive interest rates, flexible tenures, and favorable terms — often better than going directly to a lender."
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-6 py-16 max-w-7xl mx-auto">
      {/* Left Side: FAQ */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6">FAQ</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
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
              <span className="text-xl">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            {index === activeIndex && (
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Branding
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-0 text-center lg:text-left">
        <h1 className="text-6xl font-extrabold">OZRIT</h1>
        <p className="text-2xl font-medium mt-2">Innovating Today</p>
        <p className="text-2xl font-medium">for Tomorrow</p>
      </div> */}
    </div>
  );
}
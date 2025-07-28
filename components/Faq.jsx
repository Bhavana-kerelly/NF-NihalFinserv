"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Ozrit provide?",
    answer:
      "We offer end-to-end solutions in custom software development, mobile & web app development, AI & ML integration, UI/UX design, digital marketing, and cloud consulting.",
  },
  {
    question: "How long has Ozrit been in business?",
    answer: "Ozrit has been delivering innovative technology solutions for over 16 years.",
  },
  {
    question: "Which technologies and frameworks does ozrit specialize in?",
    answer: "Ozrit specializes in a wide range of technologies including React, Node.js, Angular, Python, .NET, AWS, Azure, and more.",
  },
  {
    question: "What makes Ozrit different from other tech firms?",
    answer: "Our client-first approach, 99% retention rate, deep technical expertise, and agile development process distinguish us from competitors.",
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
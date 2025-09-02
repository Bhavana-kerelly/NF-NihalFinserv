"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
  { name: "Short-Term Loans", link: "/services/structuredproducts/shorttermloans" },
  { name: "Long-Term Loans", link: "/services/structuredproducts/longtermloans" },
  { name: "Credit Cards", link: "/services/structuredproducts/creditcards" },
];

const steps = [
  "MSMEs & Enterprises seeking growth capital",
  "Startups expanding operations or entering new markets",
  "Manufacturers upgrading to new equipment",
  "Traders & retailers boosting inventory",
  "Service providers modernizing infrastructure",
  "Individuals with large personal financial needs (property purchase, wedding, etc.)",
];

export default function MortgageLoans() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/termloans/T1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-5">
            Structured Funding. Predictable Payments. Long-Term Growth.
          </h2>
          <p className="text-base mb-6">
            Looking for long-term funding with structured repayments? Nihal Finserv offers customized Term Loans tailored to your business or personal financial goals. Whether it’s for business expansion, equipment purchase, working capital, or large-scale personal expenditures — we provide stability and flexibility, so you can grow with confidence.
          </p>
        </motion.div>
      </motion.section>

      {/* Term Loans Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/termloans/T2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What Are Term Loans?
            </h2>
            <p>
              A Term Loan is a lump-sum loan granted for a specific purpose with a fixed repayment schedule over a defined period. It’s ideal for entrepreneurs, SMEs, and individuals seeking large funding with the comfort of predictable EMIs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#132b4a] text-white px-8 py-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Features
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Where Your</span> <br />
              <span className="text-red-500">Goals</span>{" "}
              <span className="text-gray-500">Come First</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Your dreams are not just numbers - they are plans, futures, and possibilities.
            </p>
            <p className="text-gray-300 text-sm">
              As an RBI-compliant financial consultancy and an authorized channel partner with top banks and NBFCs, Nihal Finserv brings credibility, transparency, and trust to your loan journey.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2 mt-6">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: "Loan Amount", desc: "₹1 Lakh to ₹10 Crores (based on eligibility)" },
              { title: "Tenure", desc: "1 to 10 years" },
              { title: "Repayment", desc: "Monthly EMIs or Quarterly Installments." },
              { title: "Usage", desc: "Business Expansion, Asset Purchase, Working Capital, etc." },
              { title: "Collateral", desc: "Secured/Unsecured options available" },
              { title: "Interest Rate", desc: "Competitive rates from leading banks/NBFCs" },
              { title: "Processing", desc: "Fast approval with minimal documentation" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 p-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Rest of your sections */}
      {/* Repeat same animation wrappers as needed */}
      <ContactSection />
      <ServiceSection />
    </>
  );
}

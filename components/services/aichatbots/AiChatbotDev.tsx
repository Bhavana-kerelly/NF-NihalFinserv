"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Business Registration / GST Certificate",
  "Quotation or Project Scope for Chatbot Development",
  "Last 6–12 months’ bank statements",
  "KYC of Proprietor / Partner / Director",
];

export default function AIChatbotFinancing() {
  // refs
  const heroRef = useRef(null);
  const financeRef = useRef(null);
  const featuresRef = useRef(null);
  const docsRef = useRef(null);
  const casesRef = useRef(null);

  // inView
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const financeInView = useInView(financeRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const docsInView = useInView(docsRef, { once: false, amount: 0.3 });
  const casesInView = useInView(casesRef, { once: false, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -5 }}
          animate={heroInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -120, rotate: -5 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/aichatbot/ACD1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-5">
            Empower Conversations. <br />We Empower Your Budget.
          </h2>
          <p className="text-base mb-6">
            AI chatbots are transforming customer service and automation across industries. Nihal
            Finserv helps you finance custom chatbot development — so you can scale, support, and
            serve better, without heavy upfront costs.
          </p>
          <p className="text-base">
            Whether for support, sales, HR, or automation — we enable AI deployment without
            disrupting your cash flow.
          </p>
        </motion.div>
      </motion.section>

      {/* What We Finance */}
      <motion.section
        ref={financeRef}
        initial={{ opacity: 0, y: 100 }}
        animate={financeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.9 }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={financeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.9 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/ACD2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={financeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-700 text-lg space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {[
                "Custom AI Chatbot Development",
                "Natural Language Processing (NLP) Tools",
                "Machine Learning Model Training",
                "Chatbot Integration with Apps & Websites",
                "SaaS Chatbot Platforms & Licenses",
                "UI/UX Design & Deployment Services",
                "Security, Hosting & Maintenance",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={financeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        className="bg-[#132b4a] text-white px-8 py-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your Tech</span> <br />
              <span className="text-red-500">Finance Ally</span>{" "}
              <span className="text-gray-500">for AI Projects</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Deploy your AI chatbot quickly and affordably — with leasing and funding solutions
              designed for innovation-led businesses.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2"
            >
              <span className="text-red-500">&#8213;</span> Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                title: "Zero Upfront Investment",
                desc: "Pay in EMIs and preserve your working capital",
              },
              {
                title: "Flexible Leasing",
                desc: "Lease short-term or opt for long-term repayment plans",
              },
              {
                title: "Faster Go-to-Market",
                desc: "Quick funding lets you launch faster than competitors",
              },
              {
                title: "Upgrade-Ready Plans",
                desc: "Adapt to tech evolution without budget worries",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={featuresInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="border border-gray-700 p-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Document Checklist */}
      <motion.section
        ref={docsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={docsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.9 }}
        className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={docsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              We'll help you through each step — from proposal to payout.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={docsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-800 text-base md:text-lg"
                >
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {step}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={docsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/aichatbot/ACD3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Who Can Apply & Use Cases */}
      <motion.section
        ref={casesRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={casesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.9 }}
        className="bg-white text-black py-16 px-6 md:px-20"
      >
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            AI Chatbot Development Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Let your bot talk. We’ll handle the costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Use This",
                points: [
                  "E-commerce Brands",
                  "Hospitals & Clinics (Virtual Assistants)",
                  "Financial Institutions & Fintech Startups",
                  "Customer Support Teams",
                  "Educational Institutions",
                  "Travel & Hospitality Services",
                  "Product Startups",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Tech-savvy financing support",
                  "Fast approvals & disbursals",
                  "Growth-aligned EMI structuring",
                  "Trusted by SMEs & Enterprises alike",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Service Bots",
                  "HR & Internal Process Assistants",
                  "Lead Generation & Sales Chatbots",
                  "Appointment Booking Interfaces",
                  "AI Assistants for E-commerce or Banking",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Thanks to Nihal Finserv, we built our AI support chatbot in weeks. They handled the financials while we focused on training the model and UX.",
              },
            ].map(({ city, text, points }, idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 50 }}
                animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="border border-gray-700 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
                {points ? (
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, idx2) => (
                      <motion.li
                        key={idx2}
                        initial={{ opacity: 0, x: 40 }}
                        animate={casesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                        transition={{ duration: 0.4, delay: idx2 * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={casesInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

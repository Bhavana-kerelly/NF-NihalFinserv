"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const industries = [
  { name: "ChatGPT Solutions", link: "/services/structuredproducts/chatgptsolutions" },
  { name: "AI ChatBot Dev", link: "/services/structuredproducts/aichatbotdev" },
];

const steps = [
  "Business KYC & registration",
  "Chatbot software proposal or cost estimate",
  "Bank statements (6–12 months)",
  "ITR or audited financials (Optional: Tech deck for custom bots)",
];

export default function AIChatbotFinancing() {
  // Refs for sections
  const heroRef = useRef(null);
  const financeRef = useRef(null);
  const featuresRef = useRef(null);
  const docsRef = useRef(null);
  const industriesRef = useRef(null);
  const casesRef = useRef(null);

  // InView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const financeInView = useInView(financeRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const docsInView = useInView(docsRef, { once: false, amount: 0.3 });
  const industriesInView = useInView(industriesRef, { once: false, amount: 0.3 });
  const casesInView = useInView(casesRef, { once: false, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 80 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/aichatbot/A1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-5">
            Empower with AI. <br /> Finance Smarter.
          </h2>
          <p className="text-base mb-6">
            AI-powered chatbots are reshaping how businesses engage, serve, and convert. At Nihal
            Finserv, we provide financing options that let you automate and scale — without budget
            disruptions.
          </p>
          <p className="text-base">
            Get started with leasing and EMI plans for both ready-made and custom conversational AI tools.
          </p>
        </motion.div>
      </motion.section>

      {/* What We Finance */}
      <motion.section
        ref={financeRef}
        initial={{ opacity: 0, y: 80 }}
        animate={financeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={financeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.9 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/A2.jpg"
                alt="AI Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={financeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-700 text-lg space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What Can Be Financed
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {[
                "AI Chatbot Licenses (Monthly/Annual)",
                "Customization & Development Costs",
                "CRM & Website Integrations",
                "NLP, Machine Learning & Training",
                "Multichannel Bots (Web, WhatsApp, Instagram)",
                "Analytics & Automation Dashboards",
                "Ongoing Maintenance & Upgrades",
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
        initial={{ opacity: 0, y: 80 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        className="bg-[#132b4a] text-white px-8 py-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Finance Partner</span> <br />
              <span className="text-red-500">for Conversational AI</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Automate lead generation, support, and engagement — we fund your AI chatbot rollout with flexible options.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { title: "Zero Upfront Investment", desc: "Pay over time and maintain healthy cash flow." },
              { title: "Quick Deployment", desc: "Launch faster with instant funding support." },
              { title: "Future-Proof AI Tools", desc: "Stay upgraded with the latest AI chatbot models and tools." },
              { title: "Flexible Leasing Plans", desc: "Monthly, quarterly, or custom tenures based on your model." },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
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
        initial={{ opacity: 0, y: 80 }}
        animate={docsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
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
              Simple documents. Speedy processing.
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
            initial={{ opacity: 0, x: 80 }}
            animate={docsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/aichatbot/A3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* AI Chat Bot Links */}
      <motion.section
        ref={industriesRef}
        initial={{ opacity: 0, y: 80 }}
        animate={industriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
      >
        <div className="bg-[#132b4a] text-white px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">AI CHAT BOT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-600 rounded-md py-6 px-4 flex items-center justify-center hover:bg-gray-800 transition text-sm font-medium text-center"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Can Apply & Use Cases */}
      <motion.section
        ref={casesRef}
        initial={{ opacity: 0, y: 80 }}
        animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        className="bg-white text-black py-16 px-6 md:px-20"
      >
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">AI Chatbots Financing</h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Power customer interaction — without draining your capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Ideal for Businesses",
                points: [
                  "E-Commerce & D2C Brands",
                  "Call Centers & BPOs",
                  "Hotels, Clinics & Service Providers",
                  "Banks, Fintechs & Insurance Firms",
                  "Retail Chains & Franchise Networks",
                  "Marketing & SaaS Companies",
                  "EdTech, HealthTech & HRTech Startups",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Experts in AI & SaaS Financing",
                  "Flexible Leasing Plans",
                  "Quick Approval with Minimal Paperwork",
                  "End-to-End Financial Support",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Support & Live Chat",
                  "Lead Capture & Qualification",
                  "Multilingual Bot Deployment",
                  "CRM & Backend Integrations",
                  "AI Chat on WhatsApp, Instagram, etc.",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv gave us the financial runway to build a multi-channel AI chatbot across our sales and support teams. Easy, fast, and supportive throughout.",
              },
            ].map(({ city, text, points }, idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 40 }}
                animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
                  <p className="text-gray-300 leading-relaxed">{text}</p>
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

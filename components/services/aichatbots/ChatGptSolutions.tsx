"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Business registration documents",
  "ChatGPT licensing or service quote",
  "Recent bank statements (6–12 months)",
  "Basic KYC (with optional AI workflow brief)",
];

export default function ChatGPTSolutionsFinancing() {
  // refs
  const heroRef = useRef(null);
  const financeRef = useRef(null);
  const featuresRef = useRef(null);
  const docsRef = useRef(null);
  const casesRef = useRef(null);

  // inView triggers
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
        initial={{ opacity: 0, y: 80 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -120, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -120, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/aichatbot/CGS1.jpg"
            alt="ChatGPT Solutions Financing"
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
            Accelerate AI Integration. <br />We’ll Ease the Financial Load.
          </h2>
          <p className="text-base mb-6">
            ChatGPT is transforming how businesses operate — from customer support to automation.
            Nihal Finserv helps finance ChatGPT-powered deployments with tailored EMI and leasing
            solutions.
          </p>
          <p className="text-base">
            Focus on building smarter workflows while we help you spread your AI investment over
            time.
          </p>
        </motion.div>
      </motion.section>

      {/* What We Finance */}
      <motion.section
        ref={financeRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={financeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.9 }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={financeInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.9 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/CGS2.jpg"
                alt="What We Finance"
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
              What Can Be Financed
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {[
                "ChatGPT Enterprise Licenses",
                "API Integration & Custom Workflows",
                "Content Automation Tools & Prompts",
                "Data Security & Compliance Features",
                "Analytics Dashboards",
                "Training & Deployment Services",
                "Plugins & Third-Party App Integration",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={financeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
        initial={{ opacity: 0, y: 100 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
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
              <span className="text-gray-400">AI-First</span> <br />
              <span className="text-red-500">Finance Partner</span>{" "}
              <span className="text-gray-500">for GPT Integration</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Turn AI into ROI — with cost-effective, scalable financing for ChatGPT tools, training,
              and deployment.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
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
                title: "Spread Costs Over Time",
                desc: "Preserve working capital, reduce upfront AI investment.",
              },
              {
                title: "Enterprise-Grade Tools Access",
                desc: "Enable advanced GPT features and admin controls affordably.",
              },
              {
                title: "Fast Digital Transformation",
                desc: "Speed up automation across your workflows.",
              },
              {
                title: "Tailored Leasing Options",
                desc: "Short or long-term leasing for AI and SaaS tools.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={featuresInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={docsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
              Minimal paperwork, faster approvals.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={docsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={docsInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/aichatbot/CGS3.jpg"
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
        initial={{ opacity: 0, y: 80 }}
        animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        className="bg-white text-black py-16 px-6 md:px-20"
      >
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            ChatGPT Solutions Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Let AI power your business — we’ll handle the finances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Can Benefit",
                points: [
                  "Tech Startups & SaaS Companies",
                  "Content Agencies & Copywriters",
                  "Call Centers & Support Teams",
                  "Banks & Fintech Firms",
                  "EdTech & eLearning Platforms",
                  "E-commerce, Retail & Services",
                  "IT & Engineering Teams",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "AI-First Financing Expertise",
                  "Minimal Paperwork & Fast Approvals",
                  "Flexible EMI & Leasing Options",
                  "Startup & MSME Friendly",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Support Chatbots",
                  "Knowledge Base Assistants",
                  "Content & Code Automation",
                  "Internal HR or Ops Bots",
                  "Lead Generation GPTs",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv helped us launch with ChatGPT Enterprise in weeks — the financing was seamless, and the ROI followed fast.",
              },
            ].map(({ city, text, points }, idx) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={casesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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

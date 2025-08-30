"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Securitization",
  "Loan Syndication",
  "Mezzanine Financing",
  "Asset-Backed Loans",
  "Structured Working Capital",
];

/* ✅ Hook: restart animation whenever section enters view */
function useInViewAnimation(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ✅ Wrapper for animations */
function Section({
  children,
  animation = "fadeUp",
  delay = 0,
}: {
  children: React.ReactNode;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "fadeIn";
  delay?: number;
}) {
  const { ref, inView } = useInViewAnimation();

  const variants: Record<string, any> = {
    fadeUp: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function StructuredFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <Section animation="fadeUp">
        <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
          <Section animation="slideLeft" delay={0.1}>
            <div className="w-full md:w-1/2">
              <Image
                src="/coorporate/S1.jpg"
                alt="Office"
                width={800}
                height={500}
                className="rounded shadow w-full object-cover"
              />
            </div>
          </Section>

          <Section animation="slideRight" delay={0.2}>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-5">
                Custom Financial Solutions for Complex Needs
              </h2>
              <p className="text-base mb-6">
                At Nihal Finserv, we understand that one-size-fits-all doesn't
                work for large or intricate financial needs. That’s where our
                Structured Finance solutions come in — tailored funding
                mechanisms designed for high-value, non-traditional, or complex
                business scenarios.
              </p>
              <p>
                Whether you’re managing multi-phase infrastructure projects,
                leveraged acquisitions, or long-term growth investments, we
                structure capital flows that are efficient, risk-mitigated, and
                fully aligned with your objectives.
              </p>
            </div>
          </Section>
        </section>
      </Section>

      {/* What is Structured Finance */}
      <Section animation="fadeIn">
        <section className="w-full px-6 py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Section animation="scaleIn">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/coorporate/S2.jpg"
                  alt="Team"
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Section>

            <Section animation="slideRight" delay={0.2}>
              <div className="text-gray-700 text-lg space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                  What is Structured Finance?
                </h2>
                <p>
                  Structured Finance refers to highly customized financial
                  instruments that go beyond conventional loans or banking
                  facilities. These solutions are built around your project cash
                  flows, asset pools, or future receivables — helping unlock
                  capital without burdening your balance sheet.
                </p>
              </div>
            </Section>
          </div>
        </section>
      </Section>

      {/* Key Features */}
      <Section animation="fadeUp">
        <section className="bg-[#132b4a] text-white px-8 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <Section animation="slideLeft">
              <div>
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
                  Your dreams are not just numbers - they are plans, futures,
                  and possibilities.
                </p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
            </Section>

            <div className="space-y-6">
              {[
                {
                  title: "Customized Structuring",
                  desc: "Built around your cash flow cycles",
                },
                {
                  title: "Off-Balance Sheet Options",
                  desc: "Improve debt ratios and liquidity",
                },
                {
                  title: "Risk Sharing",
                  desc: "Instruments to reduce concentration and exposure",
                },
                {
                  title: "Regulatory Compliant",
                  desc: "Fully aligned with RBI and financial norms",
                },
                {
                  title: "End-to-End Support",
                  desc: "From documentation to disbursal & monitoring",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="border border-gray-700 p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* Types of Structured Finance */}
      <Section animation="fadeIn">
        <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <Section animation="slideLeft">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  Types of Structured Finance We Offer:
                </h2>
                <ul className="space-y-4">
                  {steps.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-800 text-base md:text-lg"
                    >
                      <CheckCircle className="text-red-500 mt-1" size={20} />
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section animation="slideRight" delay={0.2}>
              <div className="w-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/coorporate/S3.jpg"
                  alt="Developer at work"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Section>
          </div>
        </section>
      </Section>

      {/* Structured Finance Info */}
      <Section animation="scaleIn">
        <section className="bg-white text-black py-16 px-6 md:px-20">
          <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-6">
              Structured Finance
            </h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-14">
              For businesses with vision and complexity, we provide the capital
              intelligence to match.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  city: "Who is it for?",
                  points: [
                    "Large-scale infrastructure or real estate projects",
                    "Companies with complex balance sheets",
                    "Debt restructuring or refinancing requirements",
                    "M&A funding and buyout structuring",
                    "Inventory-backed or receivables-based funding",
                    "Project finance with multiple stakeholders",
                  ],
                },
                {
                  city: "Why Choose Nihal Finserv?",
                  points: [
                    "Experienced in high-value project structuring",
                    "Tailor-made solutions for unique business models",
                    "Partnerships with NBFCs, banks & private equity players",
                    "Quick turnarounds & complete confidentiality",
                    "Transparent process with risk advisory included",
                  ],
                },
                {
                  city: "Basic Requirements",
                  points: [
                    "Business financials (Audited P&L, Balance Sheet)",
                    "Project details or asset portfolio breakdown",
                    "PAN, GST, Company KYC documents",
                    "Repayment source outline",
                    "Existing liabilities and debt profile",
                  ],
                },
                {
                  city: "Client Spotlight",
                  text: "We had a multi-year real estate project requiring multi-stage capital. Nihal Finserv’s structured finance team created a hybrid model with phased disbursals and escrow-based monitoring. The flexibility and professionalism were unmatched.",
                },
              ].map(({ city, text, points }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="border border-gray-700 p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {city}
                  </h3>
                  {points ? (
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{text}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

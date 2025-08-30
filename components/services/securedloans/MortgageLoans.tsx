"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Business owners looking to raise capital",
  "Salaried individuals needing large personal funds",
  "Families planning higher education or destination weddings",
  "Entrepreneurs managing operational cash flow",
];

/* ✅ Hook to restart animations on scroll */
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

/* ✅ Wrapper for sections */
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
    scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
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

export default function MortgageLoans() {
  return (
    <>
      {/* Hero Section */}
      <Section animation="fadeUp">
        <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
          <Section animation="slideLeft">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/M1.jpg"
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
                Leverage Your Property to Unlock Financial Opportunities
              </h2>
              <p className="text-base mb-6">
                At Nihal Finserv, we understand that your property is not just a
                place—it's an asset that can power your ambitions. Our Mortgaged
                Loan solutions (Loan Against Property) allow you to unlock the
                value of your residential, commercial, or industrial property to
                secure substantial funding for your personal or business needs.
              </p>
              <p className="text-base">
                Whether you're looking to expand your business, manage high-cost
                medical expenses, fund your child’s education, or consolidate
                existing debts, our Loan Against Property (LAP) options provide
                you with the flexibility and financial freedom you need.
              </p>
            </div>
          </Section>
        </section>
      </Section>

      {/* What is Mortgage Loan */}
      <Section animation="fadeIn">
        <section className="w-full px-6 py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Section animation="slideLeft">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/Images/Mortgage.png"
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
                  What is a Mortgaged Loan?
                </h2>
                <p>
                  A mortgaged loan, also known as a loan against property, is a
                  type of secured loan where you pledge your immovable asset—
                  such as a house, land, or commercial space—as collateral to
                  avail a loan. While the lender holds the lien on the property,
                  you continue to retain ownership and can use the funds as per
                  your requirements.
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
                  title: "High Loan Amounts",
                  text: "Avail up to 70% of the market value of your property for a wide range of financial needs.",
                },
                {
                  title: "Attractive Interest Rates",
                  text: "We help you connect with top banks and NBFCs offering competitive interest rates to make your EMIs affordable.",
                },
                {
                  title: "Flexible Repayment Tenure",
                  text: "Choose repayment plans ranging from 5 to 15 years, tailored to your cash flow and comfort.",
                },
                {
                  title: "Minimum Documentation",
                  text: "Enjoy a hassle-free loan process with easy paperwork and doorstep assistance.",
                },
                {
                  title: "Use Funds for Any Purpose",
                  text: "Funds can be used for business expansion, debt consolidation, education, medical emergencies, or even weddings—no usage restriction.",
                },
                {
                  title: "Loan Top-Up Facility",
                  text: "Already have a mortgage loan? We can help you refinance or top-up with better terms.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="border border-gray-700 p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* Ideal For */}
      <Section animation="fadeIn">
        <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <Section animation="slideLeft">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  Ideal For
                </h2>
                <p className="text-gray-600 text-lg mb-6 max-w-xl">
                  Nihal Finserv ensures personalized guidance through every
                  step, from documentation to loan disbursal.
                </p>
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
                  src="/images/Document1.jpg"
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

      {/* Final Mortgage Info */}
      <Section animation="scaleIn">
        <section className="bg-white text-black py-16 px-6 md:px-20">
          <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-6">
              Mortgage Loans
            </h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-14">
              Let your property work for you. At Nihal Finserv, we bridge your
              financial needs with the most trusted lenders, ensuring speed,
              transparency, and expert guidance throughout your loan journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  city: "Eligibility Criteria",
                  points: [
                    "Salaried professionals, self-employed individuals, business owners, and companies",
                    "Applicant must own a residential, commercial, or industrial property",
                    "Minimum age: 21 years | Maximum age: 65 years at loan maturity",
                    "Stable income and clean credit history",
                  ],
                },
                {
                  city: "How Nihal Finserv Helps You",
                  points: [
                    "We analyze your profile and property type to suggest the best mortgage options",
                    "We negotiate on your behalf with top lenders for better rates and faster approvals",
                    "We assist you in valuation reports, legal verification, and pre-sanction documentation",
                    "End-to-end support until the loan is disbursed—and beyond",
                  ],
                },
                {
                  city: "Required Documents: For Individual",
                  text: "For Individuals:",
                  points: [
                    "Identity & address proof (Aadhaar, PAN, Passport, etc.)",
                    "Property documents (Title deed, Sale deed, EC, Tax receipts)",
                    "Income proof (Salary slips, IT returns, Bank statements)",
                  ],
                },
                {
                  city: "For Business Owners",
                  points: [
                    "Company financials",
                    "GST returns",
                    "Business registration/license",
                  ],
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

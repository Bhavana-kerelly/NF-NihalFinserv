"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "PAN Card, GST Certificate, Address Proof",
  "Company registration documents",
  "Last 2–3 years of Audited Financials",
  "Bank Statements (last 6–12 months)",
  "ITR and Balance Sheet",
  "Business profile and projections",
];

/* ✅ Hook to trigger + restart animations on scroll */
function useInViewAnimation(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50); // restart animation
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ✅ Section wrapper for reusable animations */
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

export default function OdCc() {
  return (
    <>
      {/* Hero Section */}
      <Section animation="fadeUp">
        <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
          <Section animation="slideLeft">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/H1.jpg"
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
                Flexible Working Capital Solutions for Growing Businesses
              </h2>
              <p className="text-base mb-6">
                At Nihal Finserv, we understand that businesses need continuous
                cash flow to operate efficiently and stay competitive. That’s why
                we offer OD (Overdraft) and CC (Cash Credit) facilities designed
                to meet your short-term working capital requirements with
                unmatched flexibility.
              </p>
              <p className="text-base">
                Whether you're a trader, manufacturer, or service provider, our
                OD/CC solutions give you access to on-demand funds—helping you
                manage cash gaps, pay suppliers, and run day-to-day operations
                without stress.
              </p>
            </div>
          </Section>
        </section>
      </Section>

      {/* What is OD/CC */}
      <Section animation="fadeIn">
        <section className="w-full px-6 py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Section animation="slideLeft">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/H2.jpg"
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
                  What is OD/CC?
                </h2>
                <p>
                  Overdraft (OD) and Cash Credit (CC) are revolving credit
                  facilities that allow you to withdraw money beyond your account
                  balance or up to a sanctioned limit, as per your business needs.
                </p>
                <p>
                  You only pay interest on the utilized amount, not the entire
                  sanctioned limit—making it a smart and economical way to manage
                  your operational expenses.
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
                  Your dreams are not just numbers - they are plans, futures, and
                  possibilities.
                </p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
            </Section>

            <div className="space-y-6">
              {[
                {
                  title: "Credit Limit Based on Business Profile",
                  text: "Sanctioned based on turnover, financials, and business performance.",
                },
                {
                  title: "Interest Charged Only on Usage",
                  text: "Save interest costs by withdrawing only when needed.",
                },
                {
                  title: "Flexible Withdrawals & Repayments",
                  text: "Withdraw anytime within the limit and repay at your convenience.",
                },
                {
                  title: "Limits from ₹5 Lakhs to ₹5 Crores",
                  text: "Tailored to suit small, medium, and large enterprises.",
                },
                {
                  title: "Renewable Annually",
                  text: "Facilities are reviewed and renewed annually based on performance.",
                },
                {
                  title: "Moratorium & Grace Period",
                  text: "Many funding options come with repayment holiday until the course is completed.",
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

      {/* Required Documents */}
      <Section animation="fadeIn">
        <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <Section animation="slideLeft">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  Required Documents
                </h2>
                <p className="text-gray-600 text-lg mb-6 max-w-xl">
                  With Nihal Finserv’s OD/CC solutions, your business stays
                  liquid, stable, and scalable.
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
                  src="/images/H3.jpg"
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

      {/* Final Section */}
      <Section animation="scaleIn">
        <section className="bg-white text-black py-16 px-6 md:px-20">
          <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-6">Home Loans</h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-14">
              Struggling with cash crunches? Don’t let financial gaps slow your
              growth. With Nihal Finserv’s OD/CC solutions, your business stays
              liquid, stable, and scalable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  city: "Who Can Apply?",
                  points: [
                    "SMEs, MSMEs, Startups, and Large Enterprises",
                    "Traders, Manufacturers, Wholesalers, and Distributors",
                    "Service-based businesses and professionals",
                    "Firms with regular working capital needs",
                  ],
                },
                {
                  city: "Why Choose OD/CC?",
                  points: [
                    "Maintain cash flow during slow cycles",
                    "Handle urgent vendor payments and operational needs",
                    "Purchase raw materials or maintain inventory",
                    "Use funds repeatedly without reapplying for a loan",
                    "Improve credit score with disciplined usage",
                  ],
                },
                {
                  city: "Why Nihal Finserv?",
                  points: [
                    "Tie-ups with major banks and NBFCs",
                    "Tailor-made working capital solutions",
                    "Transparent processes & quick sanctioning",
                    "Assistance with paperwork and renewals",
                    "Advisory on choosing between OD vs CC for your model",
                  ],
                },
              ].map(({ city, points }, idx) => (
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
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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

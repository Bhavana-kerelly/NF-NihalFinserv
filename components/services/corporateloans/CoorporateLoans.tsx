"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const industries = [
  { name: "Working Capital", link: "/services/structuredproducts/workingcapital" },
  { name: "Asset Finance", link: "/services/structuredproducts/assetfinance" },
  { name: "Leasing", link: "/services/structuredproducts/leasing" },
  { name: "Term Loans", link: "/services/structuredproducts/termloans" },
  { name: "Structed Finance", link: "/services/structuredproducts/structuredfinance" },
];

const steps = [
  "Partnerships with leading banks & NBFCs",
  "Expert financial & legal due diligence",
  "Fast-track approvals for eligible firms",
  "Customized structuring for tax & cost efficiency",
  "End-to-end documentation and compliance support",
  "Dedicated relationship manager for your account",
];

/* ✅ Inline reusable hook for intersection animations */
function useInViewAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false); // reset
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

export default function MortgageLoans() {
  return (
    <>
      {/* Hero Section */}
      <Section animation="fadeUp">
        <div className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/coorporate/C1.jpg"
              alt="Office"
              width={800}
              height={500}
              className="rounded shadow w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-5">
              Big Visions. Bold Moves. Backed by Smart Capital.
            </h2>
            <p className="text-base mb-6">
              At Nihal Finserv, we empower your business to scale, diversify, and innovate with customized corporate loan solutions. Whether you're expanding your operations, investing in new technology, or boosting your working capital — we ensure you get the right funding at the right time.
            </p>
          </div>
        </div>
      </Section>

      {/* What Are Corporate Loans */}
      <Section animation="slideRight">
        <div className="w-full px-6 py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/coorporate/C2.jpg"
                  alt="Team"
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="text-gray-700 text-lg space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                What Are Corporate Loans?
              </h2>
              <p>
                A Corporate Loan is a high-value business loan designed specifically for medium to large enterprises looking to finance growth, infrastructure, acquisitions, or operational needs. These loans offer longer tenures, flexible repayment terms, and higher limits — aligned with your company’s financial strategy.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Purpose-Fit Funding */}
      <Section animation="fadeIn">
        <div className="bg-[#132b4a] text-white px-8 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                Purpose-Fit Funding For
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
              <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                <span className="text-red-500">&#8213;</span> Get In Touch
              </button>
            </div>
            <div className="space-y-6">
              {[
                "Infrastructure Development",
                "Factory Setup or Plant Expansion",
                "Large Inventory Procurement",
                "Working Capital Support",
                "Mergers & Acquisitions",
                "New Office or Branch Launches",
                "Technology Upgrades / ERP Setup",
                "Global Market Expansion",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="border border-gray-700 p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Nihal Finserv */}
      <Section animation="fadeUp">
        <div className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Why Choose Nihal Finserv
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-xl">
                Nihal Finserv ensures personalized guidance through every step, from documentation to loan disbursal.
              </p>
              <ul className="space-y-4">
                {steps.map((step, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
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
            <div className="w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/C3.jpg"
                alt="Developer at work"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Links */}
      <Section animation="scaleIn">
        <div className="bg-[#132b4a] text-white px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">CORPORATE LOANS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="border border-gray-600 rounded-md py-6 px-4 flex items-center justify-center hover:bg-gray-800 transition text-sm font-medium text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Corporate Loans Info */}
      <Section animation="fadeIn">
        <div className="bg-white text-black py-16 px-6 md:px-20">
          <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-6">Corporate Loans</h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-14">
              At Nihal Finserv, we’re more than loan facilitators—we’re your financial growth partners. Let us help you unlock the potential of your assets and achieve your ambitions with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  city: "Key Features",
                  points: [
                    "Loan Amount ₹50 Lakhs to ₹100 Crores+",
                    "Tenure 1 to 10 Years",
                    "Interest Rates Competitive, based on profile",
                    "Repayment Options EMI, bullet, structured",
                    "Security Secured / Unsecured options",
                    "Top-Up Facility Available after timely repayment",
                  ],
                },
                {
                  city: "Eligibility Criteria",
                  points: [
                    "Business Age 3+ years of operations",
                    "Turnover ₹5 Crores+ annually",
                    "Profitability Last 2 years preferred",
                    "Docs Required Company financials, ITRs, bank statements, KYC, project reports, etc.",
                    "Don’t meet all the criteria? We can still help with alternate structures or working capital solutions.",
                  ],
                },
                {
                  city: "Loan Structuring Options",
                  points: [
                    "Term Loan with Moratorium",
                    "Working Capital OD/CC Limits",
                    "Project-Based Finance",
                    "Lease Rental Discounting",
                    "Debt Consolidation / Refinancing",
                  ],
                },
                {
                  city: "Client Testimonial",
                  text: "We partnered with Nihal Finserv for a ₹15 Crore loan to expand our manufacturing unit. Their team handled everything from structuring to disbursement with full professionalism.",
                },
              ].map(({ city, text, points }) => (
                <div key={city} className="border border-gray-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
                  {points ? (
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
                      {points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

/* ✅ Section wrapper with animations */
function Section({
  children,
  animation = "fadeUp",
}: {
  children: React.ReactNode;
  animation?: "fadeUp" | "slideRight" | "fadeIn" | "scaleIn";
}) {
  const { ref, inView } = useInViewAnimation();

  const variants: Record<string, any> = {
    fadeUp: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    slideRight: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

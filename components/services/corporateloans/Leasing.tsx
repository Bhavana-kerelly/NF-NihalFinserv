"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Operating Lease",
  "Finance Lease",
  "Hire Purchase",
  "Sale & Lease Back",
];

/* ✅ Hook for triggering + restarting animations */
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

/* ✅ Section wrapper with animation presets */
function Section({
  children,
  animation = "fadeUp",
}: {
  children: React.ReactNode;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "fadeIn";
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
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function CarLoansNerAndFinancing() {
  return (
    <>
      {/* Hero Section */}
      <Section animation="fadeUp">
        <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/coorporate/L1.jpg"
              alt="Office"
              width={800}
              height={500}
              className="rounded shadow w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-5">
              Smarter Asset Access Without Ownership Burden
            </h2>
            <p className="text-base mb-6">
              Want to use high-value equipment, vehicles, or technology without
              locking up capital? Leasing from Nihal Finserv gives you the
              advantage of using essential business assets with lower upfront
              costs, predictable payments, and no ownership stress.
            </p>
            <p>
              Whether you're a startup looking to stay asset-light or a growing
              company optimizing cash flow — leasing is your flexible,
              cost-effective alternative to buying.
            </p>
          </div>
        </section>
      </Section>

      {/* What is Leasing */}
      <Section animation="slideLeft">
        <section className="w-full px-6 py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/coorporate/L2.jpg"
                  alt="Team"
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="text-gray-700 text-lg space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
                What is Leasing?
              </h2>
              <p>
                Leasing is a financial arrangement where you use an asset
                (machinery, vehicles, equipment, etc.) for a fixed term by
                paying regular rentals, without having to purchase it upfront.
              </p>
              <p>Depending on your needs, you can:</p>
              <ol>
                <li>Use the asset without owning it (Operating Lease)</li>
                <li>Own it at the end of the term (Finance Lease/Hire Purchase)</li>
              </ol>
            </div>
          </div>
        </section>
      </Section>

      {/* Key Benefits */}
      <Section animation="fadeIn">
        <section className="bg-[#132b4a] text-white px-8 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                Key Benefits
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
            <div className="space-y-6">
              {[
                "No large upfront investment",
                "EMIs often lower than loan EMIs",
                "Tax benefits on lease rentals",
                "Off-balance sheet asset management",
                "Freedom to upgrade at lease-end",
                "Easy budgeting with predictable costs",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="border border-gray-700 p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* Types of Leasing */}
      <Section animation="slideRight">
        <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Types of Leasing we offer:
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
            <div className="w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/L3.jpg"
                alt="Developer at work"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </Section>

      {/* Leasing Info */}
      <Section animation="scaleIn">
        <section className="bg-white text-black py-16 px-6 md:px-20">
          <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-6">Leasing</h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-14">
              Let us help you access the best assets without breaking your
              budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  city: "What You Can Lease",
                  points: [
                    "Commercial Vehicles (cars, trucks, delivery vans)",
                    "Industrial Equipment & Machinery",
                    "Medical Devices & Diagnostic Equipment",
                    "IT & Office Equipment",
                    "Commercial Real Estate/Modular Office Setups",
                  ],
                },
                {
                  city: "Who is it for?",
                  points: [
                    "Growing businesses needing equipment fast",
                    "Startups managing lean capital",
                    "Hospitals or labs upgrading diagnostics",
                    "Logistics firms managing fleets",
                    "Offices scaling operations affordably",
                  ],
                },
                {
                  city: "Why Choose Nihal Finserv?",
                  points: [
                    "End-to-end lease management & vendor coordination",
                    "Transparent contracts, no hidden fees",
                    "Fast processing & flexible lease terms",
                    "Custom solutions for every industry",
                    "Dedicated support throughout the lease lifecycle",
                  ],
                },
                {
                  city: "Client Experience",
                  text: "Leasing our delivery fleet through Nihal Finserv saved us lakhs in upfront cost. We got newer models and didn’t have to worry about depreciation. Total win!",
                },
              ].map(({ city, text, points }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
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

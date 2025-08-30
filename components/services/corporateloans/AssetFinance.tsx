"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import IndustriesWeServe from "@/components/Industries";
import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Equipment Finance",
  "Vehicle Finance",
  "Lease Rentals",
  "Asset Refinance",
  "Operating Lease & Hire Purchase",
];

export default function CarLoansNerAndFinancing() {
  // refs
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const offeringsRef = useRef(null);
  const casesRef = useRef(null);

  // inView states
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const introInView = useInView(introRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const offeringsInView = useInView(offeringsRef, { once: false, amount: 0.3 });
  const casesInView = useInView(casesRef, { once: false, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 100 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -5 }}
          animate={heroInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -120, rotate: -5 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/coorporate/A1.jpg"
            alt="Office"
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
            Empower Your Growth with Smart Asset-Based Funding
          </h2>
          <p className="text-base mb-6">
            Unlock the value of your current or future assets to drive business expansion,
            operations, or equipment acquisition. At Nihal Finserv, our Asset Finance solutions
            help you acquire, lease, or refinance business-critical assets — without straining your
            working capital.
          </p>
        </motion.div>
      </motion.section>

      {/* What is Asset Finance */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.9 }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={introInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.9 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/A2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-700 text-lg space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What is Asset Finance?
            </h2>
            <p>Asset Finance is a funding solution that allows businesses to either:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Acquire new equipment, machinery, or vehicles without upfront payments, or</li>
              <li>Leverage the value of existing assets to raise working capital.</li>
            </ol>
            <p>
              It’s an ideal route for businesses looking to scale efficiently, manage cash flow
              smartly, and maintain liquidity while building assets.
            </p>
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
              { title: "Loan Amount", desc: "₹1 Lakh – ₹10 Crores+" },
              { title: "Funding Type", desc: "Lease / Hire Purchase / Refinance" },
              { title: "Tenure", desc: "12 to 84 months" },
              { title: "Interest Rates", desc: "Customized as per asset type" },
              { title: "Collateral", desc: "Primarily the financed asset" },
              { title: "Processing Time", desc: "Quick approvals & disbursal" },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={featuresInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="border border-gray-700 p-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Offerings */}
      <motion.section
        ref={offeringsRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={offeringsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.9 }}
        className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={offeringsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Asset Finance Offerings
            </h2>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={offeringsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            animate={offeringsInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/coorporate/A3.jpg"
              alt="Developer at work"
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
        initial={{ opacity: 0, y: 100 }}
        animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.9 }}
        className="bg-white text-black py-16 px-6 md:px-20"
      >
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">Asset Finance</h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Let us help you acquire or refinance assets the smart way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Perfect For ",
                points: [
                  "Buying industrial machinery or plant equipment",
                  "Financing commercial vehicles or fleets",
                  "Acquiring office furniture, computers, or systems",
                  "Leasing high-value technical equipment",
                  "Refinancing owned assets to free up working capital",
                ],
              },
              {
                city: "Why Choose Nihal Finserv?",
                points: [
                  "Vendor tie-ups for better asset pricing",
                  "Attractive interest rates with flexible EMIs",
                  "Quick processing & minimal documentation",
                  "Tailored financing as per your asset lifecycle",
                  "Transparent ownership and depreciation structure",
                ],
              },
              {
                city: "Who Can Apply",
                points: [
                  "Business Type: MSMEs, Corporates, Startups, Traders, Service Providers",
                  "Vintage: 1 year+ in operations",
                  "Documents: KYC, Bank Statements, ITRs, GST Returns, Asset Invoices",
                ],
              },
              {
                city: "Client Review",
                text: "Our business often faces seasonal dips in cash flow. Nihal Finserv’s working capital loan kept our operations steady. Great service and fast approvals!",
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

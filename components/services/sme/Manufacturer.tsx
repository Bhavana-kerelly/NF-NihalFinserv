"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const steps = [
  "Company PAN & Aadhar (proprietor/partners/directors)",
  "GST registration",
  "ITRs & Balance Sheets (last 2 years)",
  "Business address & ownership proof",
  "Bank statements (last 6 months)",
  "Quotation/proforma for machinery (if applicable)",
];

export default function MortgageLoans() {
  return (
    <>
      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/sme/M1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-2xl font-bold mb-5">
            Empowering India’s Makers with Smart Financial Support
          </h2>
          <p className="text-base mb-6">
            From production lines to raw material procurement — manufacturers
            need capital at every step. At Nihal Finserv, we provide specialized
            loans for manufacturers to help scale operations, increase
            efficiency, and meet growing market demands with confidence.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/M2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-gray-700 text-lg space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Tailored Loans for Manufacturing Businesses
            </h2>
            <p>
              Whether you're into textiles, engineering, chemicals, food
              processing, packaging, electronics, or metal works, we provide
              financing that fits your unique manufacturing cycle.
            </p>
            <h4>Use Our Funds For:</h4>
            <ol className="space-y-1">
              <li>Raw material procurement</li>
              <li>Plant setup or expansion</li>
              <li>Machinery & equipment purchase or upgrade</li>
              <li>Inventory stocking</li>
              <li>Process automation or technology integration</li>
              <li>Working capital for smooth operations</li>
            </ol>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="bg-[#132b4a] text-white px-8 py-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Benefits
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
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            {[
              {
                title: "Customized Loan Solutions",
                desc: "Based on your scale, sector, and cycle",
              },
              {
                title: "Collateral or Non-Collateral Options",
                desc: "Depending on eligibility",
              },
              {
                title: "Quick Processing",
                desc: "₹50,000 – ₹50 Lakhs. Get approvals within days",
              },
              {
                title: "Structured EMIs",
                desc: "Suited to your production cash flow",
              },
              {
                title: "Expert Guidance",
                desc: "From financial advisors who understand manufacturing",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-700 p-6 hover:border-red-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Nihal Finserv ensures personalized guidance through every step,
              from documentation to loan disbursal.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-800 text-base md:text-lg"
                >
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/sme/M3.jpg"
              alt="Developer at work"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="bg-white text-black py-16 px-6 md:px-20"
      >
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">Manufacturer</h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Don’t let cash flow gaps slow down your manufacturing momentum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Eligibility",
                points: [
                  "Business vintage of 1 year or more",
                  "Valid GST, PAN, & business registration",
                  "Healthy banking and repayment history",
                  "Clear financial documentation",
                ],
              },
              {
                city: "Hear from Our Clients:",
                text: "“We needed funds to ramp up our food packaging unit before the festival rush. Nihal Finserv helped us secure a manufacturer loan in record time, with a repayment schedule that matched our cash inflow. A real business partner!”",
              },
            ].map(({ city, text, points }) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="border border-gray-700 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {city}
                </h3>
                {points ? (
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
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

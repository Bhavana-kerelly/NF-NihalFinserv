"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

const industries = [
  { name: "Manufacturer", link: "/services/structuredproducts/manufacturer" },
  { name: "Distributor", link: "/services/structuredproducts/distributor" },
  { name: "Retailer", link: "/services/structuredproducts/retailer" },
  { name: "Service Provider", link: "/services/structuredproducts/serviceprovider" },
  { name: "Vendor", link: "/services/structuredproducts/vendor" },
];

const steps = [
  "Business KYC (PAN, Aadhar, GST, Address Proof)",
  "Past 1–2 years’ ITRs and Financials",
  "Bank Statements (last 6 months)",
  "Business registration or trade license",
  "Existing loan statements (if any)",
];

export default function MortgageLoans() {
  return (
    <>
      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10"
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/S1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Small and Medium Businesses to Scale Smarter
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we recognize the heart of the Indian economy — Small and Medium Enterprises (SMEs).
            Whether you're a trader, manufacturer, service provider, or startup, our SME Loan solutions are designed
            to support your ambition with speed, flexibility, and reliability.
          </p>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full px-6 py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/S2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Fuel Your Business Growth
            </h2>
            <p>Whether You Need Funds For</p>
            <ol>
              <li>Buying Machinery or Equipment</li>
              <li>Purchasing Inventory or Raw Materials</li>
              <li>Expanding Infrastructure</li>
              <li>Managing Working Capital Gaps</li>
              <li>Digitizing or Automating Operations</li>
            </ol>
            <p>
              Our SME loan offerings are structured to fit your unique business cycle and cash flow needs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* You can wrap ALL other sections the same way */}
      {/* Example for checklist section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Nihal Finserv ensures personalized guidance through every step, from documentation to loan disbursal.
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
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/sme/S3.jpg"
              alt="Developer at work"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

export default function CapitalGoodsFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/CG1.jpg"
            alt="Capital Goods Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Growth. <br />Financing Capital Goods Made Simple.
          </h2>
          <p className="text-base mb-6">
            Capital goods like machinery, infrastructure, and IT tools are essential to scale operations — but often require heavy investments. Nihal Finserv helps you lease or finance these assets without burdening your cash flow.
          </p>
          <p className="text-base">
            Acquire the equipment you need with flexible, tax-efficient plans aligned to your industry and growth.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/CG2.jpg"
                alt="What We Finance"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What Are Capital Goods?
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Heavy Machinery & Tools</li>
              <li>Industrial Equipment</li>
              <li>Commercial Vehicles</li>
              <li>Manufacturing Plants</li>
              <li>Power Generators</li>
              <li>Construction Equipment</li>
              <li>Medical & Diagnostic Devices</li>
              <li>IT Infrastructure</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your Partner for</span> <br />
              <span className="text-red-500">Capital Equipment Financing</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Whether upgrading old machines or expanding production, our plans are designed to make capital equipment accessible and affordable.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Conserve Cash Flow</h3>
              <p className="text-gray-400">Reduce upfront cost and maintain liquidity for operations.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible Repayment Options</h3>
              <p className="text-gray-400">Choose repayment plans aligned to your cash cycles.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax-Efficient Structuring</h3>
              <p className="text-gray-400">Benefit from depreciation or lease-based deductions.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Lease or Own</h3>
              <p className="text-gray-400">Own the asset at end of tenure or simply lease for use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Replaced “Documents” section with Financing Solutions */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Financing Solutions
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Nihal Finserv offers tailored financing for a wide range of capital goods across industries.
            </p>
            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
              <li>⚙ CNC machines, packaging units, injection molding tools</li>
              <li>🏗 Road rollers, cranes, concrete mixers</li>
              <li>🏥 X-ray machines, ICU beds, lab equipment</li>
              <li>🚛 Forklifts, vans, logistics trucks</li>
              <li>🖥 Servers, data systems, office automation</li>
            </ul>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/equipmentfinancing/CG3.jpg"
              alt="Capital Goods"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who Can Apply & Use Cases */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Capital Goods Financing Solutions
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Finance the assets that shape your production and scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Consider This",
                points: [
                  "Manufacturers & Fabricators",
                  "Construction & Real Estate Developers",
                  "Hospitals & Diagnostic Centers",
                  "Fleet & Logistics Operators",
                  "Retail & Warehousing Units",
                  "Educational & Research Institutions",
                  "Startups Needing CapEx Support",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Industry-Specific Expertise",
                  "Loans, Leases, or Hire-Purchase Options",
                  "Widest Lender Network (Banks/NBFCs)",
                  "Hassle-Free Processing",
                  "Transparent, Flexible Terms",
                ],
              },
              {
                city: "Capital Equipment Financed",
                points: [
                  "CNC Machines & Assembly Lines",
                  "Road Rollers, Mixers & Cranes",
                  "X-ray Machines, ICU Beds, Labs",
                  "Fleet Tools & Forklifts",
                  "Servers, Surveillance & IT Systems",
                ],
              },
              {
                city: "Client Testimonial",
                text: "We equipped our factory with high-end injection molding machines through Nihal Finserv. It was the smoothest CapEx funding experience we've had.",
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
      </section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

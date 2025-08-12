"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business registration & PAN",
  "Equipment quotation/invoice",
  "Previous 6–12 months' bank statements",
  "ITRs or audited financials",
  "Project details (if applicable)",
];

export default function ConstructionEquipmentFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/CE1.jpg"
            alt="Construction Equipment Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Build Bigger. Grow Faster. Finance Smarter.
          </h2>
          <p className="text-base mb-6">
            Construction projects demand powerful machinery — and solid financial support. With Nihal Finserv, you can acquire new or used construction equipment without upfront burden, using customized loans and leasing plans.
          </p>
          <p className="text-base">
            Scale your site confidently with structured EMIs and asset-matched terms.
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/CE2.jpg"
                alt="Construction Equipment Types"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Excavators & Backhoe Loaders</li>
              <li>Road Rollers & Pavers</li>
              <li>Cranes & Tower Hoists</li>
              <li>Concrete Mixers & Batching Plants</li>
              <li>Tippers & Dump Trucks</li>
              <li>Drilling Rigs, Dozers & Compactors</li>
              <li>Generators & Utility Vehicles</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Features
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Power Your</span> <br />
              <span className="text-red-500">Projects</span>{" "}
              <span className="text-gray-500">with Smart Finance</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              From earthmoving to road building — we fuel your growth with financing that fits your build.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Preserve Capital</h3>
              <p className="text-gray-400">Use funds for labor, materials, or operations</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible EMIs & Tenure</h3>
              <p className="text-gray-400">Match your repayment to project timelines</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">New or Used Machines</h3>
              <p className="text-gray-400">Finance quality used assets with verified valuation</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Custom Repayment Models</h3>
              <p className="text-gray-400">Balloon, seasonal or step-up EMIs available</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-400">Interest & depreciation deductions apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              We simplify documentation, from first step to final sanction.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/equipmentfinancing/CE3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Construction Equipment Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Unlock machinery power with financing built for contractors, builders, and project firms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Apply",
                points: [
                  "Civil & Infrastructure Contractors",
                  "Real Estate Developers",
                  "Mining & Earthmoving Companies",
                  "Road & Highway Builders",
                  "Govt. Contractors & Public Vendors",
                  "SME Builders & Project Firms",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Construction industry understanding",
                  "End-to-end support — quote to disbursal",
                  "Fast approvals & minimal paperwork",
                  "Access to new & used machinery dealers",
                  "Affordable, usage-aligned repayment terms",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Large-scale project mobilization",
                  "Site machinery fleet upgrade",
                  "Seasonal & long-term lease financing",
                  "Equipment refinance or buy-back",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv helped us lease high-value road construction equipment quickly. The approval speed and low EMI structuring made a huge difference to our cash flow.",
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

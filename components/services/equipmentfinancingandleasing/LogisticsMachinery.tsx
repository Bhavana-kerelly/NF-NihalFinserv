"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business registration and KYC",
  "Equipment quotation or invoice",
  "ITRs or audited financials",
  "6–12 months’ bank statements",
  "Warehouse/Logistics site details (if applicable)",
];

export default function LogisticsMachineryFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/LM1.jpg"
            alt="Logistics Equipment"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Move Faster. Operate Smarter. Finance Seamlessly.
          </h2>
          <p className="text-base mb-6">
            Running a successful logistics or warehousing operation requires robust and reliable equipment. Nihal Finserv enables your business to acquire machinery without the upfront capital burden — with tailored financing and leasing.
          </p>
          <p className="text-base">
            We support logistics companies, warehouses, shipping hubs, and distribution centers to stay efficient and cost-effective with modern equipment — new or pre-owned.
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/LM2.jpg"
                alt="Logistics Equipment Types"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Equipment We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Material Handling: Forklifts, Pallet Jacks, Stackers</li>
              <li>Automation Systems: Conveyor Belts, AS/RS</li>
              <li>Cargo & Dock Equipment: Hydraulic Lifts, Dock Levelers</li>
              <li>IT Systems: Barcode/RFID, WMS</li>
              <li>Packaging & Sorting Machines</li>
              <li>Cold Storage Units & Blast Freezers</li>
              <li>Tracking & Telematics Devices</li>
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
              <span className="text-gray-400">Drive Efficiency</span> <br />
              <span className="text-red-500">Power Growth</span>{" "}
              <span className="text-gray-500">with Financing</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Finance your critical logistics machinery — without disrupting working capital.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Preserve Capital</h3>
              <p className="text-gray-400">Invest without upfront cost</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Improve Efficiency</h3>
              <p className="text-gray-400">Modern tools lower processing time and costs</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible EMIs</h3>
              <p className="text-gray-400">Repay with business cycle alignment</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Deductible</h3>
              <p className="text-gray-400">Interest & depreciation may qualify</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">100% Financing</h3>
              <p className="text-gray-400">Includes software & installation too</p>
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
              We guide you through every document, form, and approval step.
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
              src="/equipmentfinancing/LM3.jpg"
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
            Logistics Machinery Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Don’t let equipment costs slow down your operations. Get the machines you need — when you need them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Apply",
                points: [
                  "Warehouse Operators & Fulfillment Centers",
                  "Third-Party Logistics (3PL) Providers",
                  "E-commerce Warehouses & Delivery Hubs",
                  "Cold Storage & FMCG Distribution Centers",
                  "Freight Forwarders & Shipping Agents",
                  "Transport Fleet Operators",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Deep logistics industry expertise",
                  "Fast approvals and minimal paperwork",
                  "Leasing, hire-purchase, or loan structures",
                  "Tie-ups with OEMs and equipment dealers",
                  "Nationwide service coverage",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Operations automation & modernization",
                  "Fleet expansion or cold storage upgrade",
                  "IT/Barcode/RFID infrastructure setup",
                  "Efficiency optimization & growth",
                ],
              },
              {
                city: "Client Testimonial",
                text: "With Nihal Finserv, we upgraded our cold chain warehouse with minimal downtime. Their fast disbursal and OEM connections saved us weeks.",
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

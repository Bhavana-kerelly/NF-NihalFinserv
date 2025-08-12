"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Capital Goods", link: "/services/structuredproducts/capitalgoods" },
    { name: "IT Hardware", link: "/services/structuredproducts/ithardware" },
    { name: "Office Infrastructure", link: "/services/structuredproducts/officeinfrastructure" },
    { name: "Cars", link: "/services/structuredproducts/cars" },
    
    { name: "Energy Saving Equipment", link: "/services/structuredproducts/energysavingequipment" },
    { name: "Healthcare Equipment", link: "/services/structuredproducts/healthcareequipment" },
    { name: "Logistic Machinery", link: "/services/structuredproducts/logisticsmachinery" },
    { name: "Solar Equipment", link: "/services/structuredproducts/solarequipment" },
  ];


const steps = [
  "Construction & Infrastructure Equipment",
  "Medical & Diagnostic Equipment",
  "Manufacturing & Industrial Machinery",
  "IT & Office Equipment",
  "Commercial Vehicles & Fleet Equipment"
];

export default function EquipmentFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/EF1.jpg"
            alt="Equipment Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Power Your Business. <br />Finance the Tools That Drive Growth.
          </h2>
          <p className="text-base mb-6">
            Acquire or lease critical machinery, IT systems, vehicles, or tools without the financial stress. Nihal Finserv provides tailored equipment financing for every stage of business.
          </p>
          <p className="text-base">
            Scale efficiently while preserving your working capital.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/EF2.jpg"
                alt="Equipment Scope"
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
              <li>Construction Equipment (Excavators, Cranes, Loaders)</li>
              <li>Medical & Diagnostic Devices (MRI, Surgical Units)</li>
              <li>Manufacturing Machinery (CNC, Packaging, etc.)</li>
              <li>IT & Office Hardware (Servers, Laptops, Surveillance)</li>
              <li>Commercial Vehicles (Logistics Vans, Trucks, Buses)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your Equipment</span> <br />
              <span className="text-red-500">Finance Ally</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Upgrade your infrastructure, fleet, or IT setup while managing costs efficiently. We tailor plans for real-world business needs.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Preserve Working Capital</h3>
              <p className="text-gray-400">Avoid large upfront expenses and maintain liquidity.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Access the Latest Technology</h3>
              <p className="text-gray-400">Lease or finance cutting-edge tools as your business evolves.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-400">Leverage tax deductions from depreciation or lease payments.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible Ownership Models</h3>
              <p className="text-gray-400">Choose between leasing or full ownership at the end of the term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Equipment Financing Solutions
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              We support a wide range of sectors and equipment types, including:
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
              src="/equipmentfinancing/EF3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      

      <section>
        <div className="bg-black text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">
        EQUIPMENT FINANCING AND LEASING
      </h2>
      

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
      </section>


      {/* Who Can Apply & Use Cases */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Equipment Financing & Leasing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Equip smart. Operate strong. Finance the tools that move your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Can Apply",
                points: [
                  "SMEs & MSMEs",
                  "Hospitals & Clinics",
                  "Construction Contractors",
                  "Retail Chains & Warehouses",
                  "Manufacturers & Fabricators",
                  "Tech Startups & IT Companies",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Quick Processing & Approvals",
                  "Tailored Repayment & Leasing Plans",
                  "Trusted Lending Partners",
                  "Transparent Terms & Charges",
                  "End-to-End Support",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Manufacturing Equipment Upgrade",
                  "Setting Up a Diagnostic Lab",
                  "IT Infrastructure Expansion",
                  "Fleet Procurement",
                  "Retail & Warehouse Automation",
                ],
              },
              {
                city: "Client Testimonial",
                text: "We scaled our fabrication unit with new CNC machines — all made possible through Nihal Finserv’s easy EMI plans. Super smooth and efficient!",
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

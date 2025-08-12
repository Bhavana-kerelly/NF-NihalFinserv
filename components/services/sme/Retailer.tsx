"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "PAN & Aadhaar of owner",
"Business registration or shop license",
"GST certificate or sales data",
"6 months bank statement",
"ITRs (if available)",
];


export default function Retailer() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/R1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Boost Your Retail Business with Hassle-Free Financing
          </h2>
          <p className="text-base mb-6">
           Retail thrives on inventory, footfall, and quick cash flow. At Nihal Finserv, we provide easy, fast, and flexible loan solutions for retailers—whether you run a small kirana store, a boutique, or a chain of outlets.
          </p>
          
          <p className="text-base">
            Our financing helps you restock, expand, renovate, or handle day-to-day expenses smoothly. No stress, no delays — just growth-driven support.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/R2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Ideal For
            </h2>
            <ol>
              <li>Purchasing bulk inventory or seasonal stock</li>
              <li>Store renovation or interior upgrades</li>
              <li>Adding new product lines</li>
              <li>Investing in POS systems and digital tools</li>
              <li>Hiring staff or managing working capital</li>
            </ol>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
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
                  Your dreams are not just numbers - they are plans, futures, and possibilities.
                </p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">No Collateral Needed</h3>
                  <p className="text-gray-400">
                    Loans based on income & turnover
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Quick Sanctions</h3>
                  <p className="text-gray-400">
                    Approvals within 48–72 hours
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Loan Amounts</h3>
                  <p className="text-gray-400">
                    ₹50,000 – ₹50 Lakhs
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Easy Repayments</h3>
                  <p className="text-gray-400">
                    Choose from EMI, overdraft, or daily repayment models
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Retail-Focused Underwriting</h3>
                  <p className="text-gray-400">
                    Designed for sales-based businesses like yours
                  </p>
                </div>
                
              </div>
            </div>
          </section>
        

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Nihal Finserv ensures personalized guidance through every step, from documentation to loan disbursal.
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

        {/* Right: Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <Image
            src="/sme/R3.jpg"
            alt="Developer at work"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

   
    
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Retailer
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         Your store deserves more than just footfall — it needs financial fuel.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Loan Snapshot:",
              points: [
    "Loan Amount: ₹50,000 to ₹50,00,000",
"Tenure: 6 to 36 months",
"Interest Rate: Competitive & customized",
"Repayment Options: Daily/Weekly/Monthly EMIs",
  ],
            },
            {
              city: "Eligibility Criteria:",
              points: [
    "Proprietor/Partnership/Private Ltd. retail business",
"Minimum 6 months of operations",
"Valid GST / Business license",
"Regular monthly sales & stable cash flow",
  ],
            },
            {
              city: " Types of Retailers We Fund:",
              points: [
    "Grocery & Kirana Stores",
"Apparel & Footwear Showrooms",
"Electronics & Mobile Shops",
"Pharmacies",
"Salons & Beauty Parlours",
"Specialty Boutiques",
"Optical & Medical Stores",
  ],
            },
            
           
            {
              city: "Retailer Success Story:",
              
              text: "With Nihal Finserv’s loan, I expanded my grocery shop into a mini-supermarket. They understood my needs and moved quickly",
              
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

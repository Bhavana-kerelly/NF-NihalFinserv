"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "KYC (PAN, Aadhaar of Proprietor/Partners/Directors)",
"Business registration documents",
"GST certificate",
"PO/Invoice copy (for invoice financing)",
"6 months bank statement",
"Audited ITR and balance sheets (last 2 years)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/V1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Vendors with Fast, Flexible Financing
          </h2>
          <p className="text-base mb-6">
            Whether you're a supplier to large corporations or a small business serving local retailers, maintaining a smooth cash flow is crucial. Nihal Finserv offers tailored Vendor Loan solutions designed to support your working capital, fulfill large orders, or manage payment cycles with ease.
          </p>
          
          <p className="text-base">
            We help vendors across industries — from manufacturing and FMCG to services and logistics — access timely funds without disrupting their operations.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/V2.jpg"
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
              Loan Highlights
            </h2>
            <ol>
              <li>Loan Range: ₹1 Lakh to ₹2 Crore</li>
              <li>Tenure: 3 to 36 months</li>
              <li>Interest Rates: Competitive, based on business profile</li>
              <li>Collateral: Optional or Nil, depending on credit history</li>
              <li>Documentation: Simple and minimal</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Fast Disbursement</h3>
                  <p className="text-gray-400">
                    Receive funds in as little as 48–72 hours
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  No Collateral Required</h3>
                  <p className="text-gray-400">
                    Based on your billing & credit performance
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Custom Loan Amounts</h3>
                  <p className="text-gray-400">
                    Scale funding as per project size
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Repayment Terms</h3>
                  <p className="text-gray-400">
                    EMI or milestone-based options
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Support for PO/Invoice Financing</h3>
                  <p className="text-gray-400">
                    Unlock capital stuck in receivables
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
            src="/sme/V3.jpg"
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
          Vendor Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         From Purchase Order Funding to Invoice Discounting, our solutions are made for vendors like you.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Perfect For:",
              points: [
    "Fulfilling bulk or urgent purchase orders",
"Managing delayed receivables or invoices",
"Procuring raw materials or inventory",
"Upgrading systems or infrastructure",
"Meeting day-to-day business expenses",
  ],
            },
            {
              city: "Eligibilty Criteria",
              points: [
    "Minimum 1 year of operational history",
"Valid GST & business licenses",
"Consistent billing or invoice flow",
"Acceptable credit report & bank conduct",
  ],
            },
            {
              city: "Real Story. Real Results.",
              text: 
    "As a vendor for a construction firm, I faced delays in receivables. Nihal Finserv's vendor loan helped me stay afloat and continue delivering quality materials without any pause.",
  
            },
            
           
            {
              city: "Did You Know?",
              
              text: "You can get loans against Purchase Orders or Invoices instead of waiting for client payments.",
              
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

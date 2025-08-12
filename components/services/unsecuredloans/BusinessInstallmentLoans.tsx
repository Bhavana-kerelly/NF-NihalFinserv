"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "PAN & Aadhaar (Proprietor/Partners/Directors)",
  "Business registration documents (GST/Shop Act/Udyam/MSME)",
  "Last 12 months’ Bank Statements",
  "Last 2 years’ ITRs with computation",
  "Office address proof & utility bills",
  "Partnership deed or MOA (if applicable)"
];


export default function CarLoansNerAndFinancing() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/B1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Power Your Growth with Flexible Business Financing
          </h2>
          <p className="text-base mb-6">
            Running a business comes with constant financial needs—whether it’s scaling operations, upgrading technology, hiring talent, or managing seasonal cash flow. At Nihal Finserv, our Business Instalment Loans provide fast, flexible funding with easy monthly EMIs, so you can focus on what matters most: growing your business.
          </p>
          
          <p className="text-base">
           We partner with top financial institutions to offer customised, collateral-free or secured loan options tailored to your business profile, ensuring quick approvals and minimal paperwork.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/B2.jpg" // make sure to place the image in /public folder
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
             What is a Business Instalment Loan?
            </h2>
            <p>
              A Business Instalment Loan is a term loan designed for entrepreneurs, SMEs, professionals, and self-employed individuals. Repayment is structured through monthly EMIs over a fixed tenure, giving you predictability and stability in managing business finances.
            </p>
            
            
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Amounts from ₹1 Lakh to ₹75 Lakhs</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tenure Options from 12 to 60 Months</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Secured & Unsecured Loan Options Available</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Simple Documentation & Fast Disbursal</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Loans for Proprietorships, Partnerships, Pvt Ltd, LLPs</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Flexible EMI Structure to Match Cash Flow</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Boost Business Credit Score with Timely Repayments</h3>
                 
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
            src="/unstructured/B3.jpg" // Place this in /public
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
          Business Installment Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Whether you're a startup or an established enterprise, funding should never hold you back. Let Nihal Finserv power your ambition with structured business loans that are as dynamic as your growth journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Best For",
              points: [
    "Business expansion or branch setup",
"Purchase of inventory or raw materials",
"Upgrading machinery or infrastructure",
"Hiring and payroll support",
"Digital transformation or tech upgrades",
"Marketing, branding, or working capital needs",
  ],
            },
            {
              city: "Eligibility Criteria",
              points: [
    "Minimum 2–3 years of business continuity",
"Annual turnover of ₹10 Lakhs or more (varies by lender)",
"Valid business registration & GST filings",
"Positive cash flows and banking history",
"Credit score of 650+ preferred",
  ],
            },
            {
              city: "Why Choose Nihal Finserv",
              points: [
    "Access to 30+ Banks and NBFCs",
"Expert Guidance on EMI Planning",
"No Collateral Options Available",
"Transparent Processing – No Hidden Charges",
"Fast Approvals Within 3–5 Working Days",
"Dedicated Loan Advisor Till Disbursal",
  ],
             
            },
            {
              city: " Real Stories, Real Growth",
              
              text: "We were struggling with raw material procurement during peak season. Nihal Finserv helped us secure a business loan in just 4 days—saved our production deadlines.",
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

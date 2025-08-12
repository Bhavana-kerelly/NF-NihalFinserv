"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import React from "react";
    



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

 const industries = [
    { name: "Loan Against Securities", link: "/services/structuredproducts/loanagainstsecurities" },
    { name: "Structured Investment", link: "/services/structuredproducts/structuredinvestments" },
    { name: "Letter of Credit", link: "/services/structuredproducts/letterofcredit" },
    { name: "Lease Rental Discounting", link: "/services/structuredproducts/leaserentaldiscounting" },
    { name: "Loan Against Securities", link: "/services/structuredproducts/loanagainstproperty" },
    
  ];

const steps = [
  "KYC Documents (PAN, Aadhaar)",
"Net Worth Declaration (for HNIs)",
"Risk Profile Assessment",
"Investment Consent Forms",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/structuredproducts/SP1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
             Tailored Investment Strategies for Enhanced Returns
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we offer Structured Products — a smart blend of fixed-income safety and market-linked growth. Designed specifically for high-net-worth individuals (HNIs) and strategic investors, these products align with your risk appetite and financial goals.
          </p>
          
          <p className="text-base">
           At Nihal Finserv, we offer Structured Products — a smart blend of fixed-income safety and market-linked growth. Designed specifically for high-net-worth individuals (HNIs) and strategic investors, these products align with your risk appetite and financial goals.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/structuredproducts/SP2.jpg"
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
              Product Highlights
            </h2>
           <ol>
            <li>Capital Protected & Non-Capital Protected Structures</li>
<li>Tenures: 1 to 5 years</li>
<li>Payoffs: Fixed, Conditional, or Market-Linked</li>
<li>Linked Assets: Equity indices, Mutual Funds, Commodities, Interest Rates</li>
<li>Currency Options: INR or USD-based investments</li>
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
                <p className='text-gray-300 text-sm'>As an RBI-compliant financial consultancy and an authorized channel partner with top banks and NBFCs, Nihal Finserv brings credibility, transparency, and trust to your loan journey.</p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Custom-Built Portfolios</h3>
                  <p className="text-gray-400">
                    Tailored to your investment objective and market outlook.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Capital Protection Options</h3>
                  <p className="text-gray-400">
                    Protect your principal while capturing upside
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Diversified Exposure</h3>
                  <p className="text-gray-400">
                    Blend of equity, debt, currency, or commodities
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Defined Outcomes</h3>
                  <p className="text-gray-400">
                    Transparent payoff structures for better planning
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tax Efficiency</h3>
                  <p className="text-gray-400">
                    Designed for better post-tax returns in select models
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
            Documents Required
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
            src="/structuredproducts/SP3.jpg"
            alt="Developer at work"
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
        STRUCTURED PRODUCTS
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
 
    
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Structured Products
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Whether you're planning for legacy, diversification, or high-yield growth — Structured Products at Nihal Finserv give you the control and clarity you deserve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: " Ideal For",
              points: [
    "High-Net-Worth Individuals (HNIs)",
"Family offices and trusts",
"Corporates seeking non-traditional investments",
"Investors with moderate to high risk appetite",
"Professionals looking to diversify beyond traditional avenues",
  ],
            },
            {
              city: " Examples of Structured Products:",
              points: [
    "Capital Protection with Equity Upside",
"Range-Bound Return Notes",
"Market-Linked Debentures (MLDs)",
"Dual-Asset Linked Notes (Equity + Gold)",
"Fixed Coupon Notes with Performance Bonus",
  ],
            },
            {
              city: "Did You Know?",
              text:  "Structured Products are often used by savvy investors to generate alpha in sideways markets while managing downside risks.",
              
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

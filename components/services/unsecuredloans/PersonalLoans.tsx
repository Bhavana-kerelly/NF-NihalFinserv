"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "PAN Card & Aadhaar (KYC)",
  "Latest 3–6 Months Bank Statements",
  "Income Proof (Salary Slips/ITR/Form 16)",
  "Employment Proof/Business Proof",
  "Passport-size Photograph"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-black text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/office-full.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Your Goals. Your Dreams. Your Loan — Simplified.
          </h2>
          <p className="text-base mb-6">
          Quick, collateral-free funding for every need — from weddings to travel, education to emergencies.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/team-photo.png" // make sure to place the image in /public folder
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
           What is a Personal Loan?
            </h2>
            <p>
           A Personal Loan is an unsecured loan that gives you the financial freedom to fulfill your personal goals without pledging any assets. Whether it’s a family wedding, medical emergency, travel, home renovation, or debt consolidation — Nihal Finserv connects you with top lenders offering fast approvals and easy EMIs.
            </p>
            
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#1C1C1C] text-white px-8 py-16">
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
                  <h3 className="text-2xl font-semibold mb-2"> Loan Amount 50000 to 40 Lakhs</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Loan Tenure 12 to 72 months</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Interest Rate Starting from 10.75% p.a.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Approval Time is as fast as 24-48 hours</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Repayment is fixed EMIs via Auto Debit/NACH</h3>
                  
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
            With Nihal Finserv’s OD/CC solutions, your business stays liquid, stable, and scalable.
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
            src="/woman-laptop.png" // Place this in /public
            alt="Developer at work"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    
    
   
    
   <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-gray-900 text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Personal Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         Nihal Finserv — Because your personal dreams deserve professional support.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Loan Uses",
              points: [
    "Wedding Expenses",
"Home Renovation or Interiors",
"Travel and Vacation",
"Clearing Credit Card or High-Interest Debt",
"Medical Emergencies",
"Education or Skill Development",
"Big Purchases (Gadgets, Furniture, etc.)",
  ],
            },
            {
              city: "Eligibility Criteria",
              points: [
    "Indian Resident (Salaried or Self-employed)",
",Age: 21 to 60 years",
"Minimum Monthly Income: ₹20,000",
"Stable Employment or Business Vintage (1–2+ years preferred)",
"Good Credit Score (650+ recommended)",
  ],
            },
            {
              city: "Why Apply Through Nihal Finserv?",
              points: [
    "Multiple Banks/NBFCs with Lowest Rates",
"Pre-Approved Loan Options (for select customers)",
"Same-Day Processing Available",
"Zero Collateral, Flexible Repayment",
"Dedicated Relationship Manager",
"Transparent Process, No Hidden Fees",
  ],
             
            },
            {
              city: "How to Apply?",
              points: [
    "1.Submit Basic Details – Fill the online form",
"2.Upload Documents – Quick verification",
"3.Get Loan Offers – Choose best EMI & tenure",
"4.Receive Funds – Directly in your bank account",
  ],
},
            {
              city: "Customer Success Story",
              
              text: "Nihal Finserv helped me secure a ₹6 lakh personal loan within 48 hours for my brother’s wedding — zero stress, full support!",
              
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

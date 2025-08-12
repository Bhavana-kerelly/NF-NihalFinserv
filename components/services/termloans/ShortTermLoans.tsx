"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "PAN Card & Aadhaar",
  "Latest Salary Slips / Income Proof",
  "Bank Statements (last 3–6 months)",
  "Business Registration Certificate",
  "ITRs or Audited Financials"
];


export default function SchoolAndCollegeFunding() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/termloans/S1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Quick Funding. Short Commitment. Instant Solutions.
          </h2>
          <p className="text-base mb-6">
            Need funds urgently for a short period? Whether it's a temporary cash crunch, a business opportunity, or an emergency expense — Nihal Finserv offers Short-Term Loans that are fast, flexible, and tailored for your immediate needs. No long-term liabilities. Just quick, smart capital.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/termloans/S2.jpg" // make sure to place the image in /public folder
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
             What is a Short-Term Loan?
            </h2>
            <p>
              A Short-Term Loan is a financing solution with a shorter repayment period — typically ranging from 3 months to 24 months. These loans are ideal for urgent requirements, seasonal business needs, working capital, or unexpected personal expenses.
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
                  <h3 className="text-2xl font-semibold mb-2"> Loan Amount</h3>
                  <p className="text-gray-400">
                   ₹50,000 to ₹50 Lakhs
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tenure</h3>
                  <p className="text-gray-400">
                   3 months to 24 months
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Repayment</h3>
                  <p className="text-gray-400">
                    Weekly, Bi-weekly, or Monthly
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral</h3>
                  <p className="text-gray-400">
                   Secured & Unsecured options available
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Approval Time</h3>
                  <p className="text-gray-400">
                   24–48 Hours
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Interest Rates</h3>
                  <p className="text-gray-400">
                    Competitive, based on profile and tenure.
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
            src="/termloans/S3.jpg" // Place this in /public
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
          Short Term Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Get quick funds without long-term commitment. Choose Nihal Finserv for your Short-Term Loan needs today.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "When Should You Choose a Short-Term Loan?",
              points: [
    "Managing a temporary cash flow gap",
"Paying supplier dues or employee salaries",
"Seizing limited-time business opportunities",
"Covering medical or emergency expenses",
"Handling unexpected repair or travel costs",
"Funding seasonal stock/inventory purchase",
  ],
            },
            {
              city: "Benifits",
              points: [
    "Fast processing & instant disbursal",
"Minimal documentation & hassle-free process",
"Low risk of long-term debt buildup",
"Credit-eligible even with moderate credit scores",
"Customized repayment plans to match cash flow",
"Guidance to choose the best lender & lowest rate",
  ],
            },
            {
              city: " Types of Short-Term Loans We Offer",
              points: [
    "Business Short-Term Loans – for inventory, vendor payments, working capital",
    "Personal Short-Term Loans – for rent, education fees, emergencies",
"Medical Short-Term Loans – for surgeries or treatments",
"Bridge Loans – to manage cash flow until long-term funding is secured",
  ],
             
            },
            {
              city: "How to Apply",
              points: [
    "1.Share your requirement – Online form or phone call",
"2.Get personalized offers – Matched with top lenders",
"3.Submit documents – Digitally or with our support",
"4.Loan disbursed – In your account within 24–48 hrs",
  ],
},
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "Access to top banks & NBFCs",
"Expert loan matching & credit profiling",
"Transparent terms with no hidden charges",
"Personalized service, fast turnaround",
"Full support throughout the loan lifecycle",
  ],
},
            {
              city: " Real Story",
              
              text: "We needed ₹5 lakhs urgently for a new consignment order. Nihal Finserv made it happen in just 2 days with a short-term business loan and flexible EMI. We delivered on time and doubled our profit!",
              
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

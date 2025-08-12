"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "PAN Card, GST Certificate, Address Proof",
  "Company registration documents",
  "Last 2–3 years of Audited Financials",
  "Bank Statements (last 6–12 months)",
  "ITR and Balance Sheet",
  "Business profile and projections"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/H1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Flexible Working Capital Solutions for Growing Businesses
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we understand that businesses need continuous cash flow to operate efficiently and stay competitive. That’s why we offer OD (Overdraft) and CC (Cash Credit) facilities designed to meet your short-term working capital requirements with unmatched flexibility.
          </p>
          
          <p className="text-base">
            Whether you're a trader, manufacturer, or service provider, our OD/CC solutions give you access to on-demand funds—helping you manage cash gaps, pay suppliers, and run day-to-day operations without stress.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/H2.jpg" // make sure to place the image in /public folder
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
             What is OD/CC?
            </h2>
            <p>
             Overdraft (OD) and Cash Credit (CC) are revolving credit facilities that allow you to withdraw money beyond your account balance or up to a sanctioned limit, as per your business needs.
            </p>
            <p>You only pay interest on the utilized amount, not the entire sanctioned limit—making it a smart and economical way to manage your operational expenses.</p>
            
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
                  <h3 className="text-2xl font-semibold mb-2">Credit Limit Based on Business Profile</h3>
                  <p className="text-gray-400">
                    Sanctioned based on turnover, financials, and business performance.</p>

                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Interest Charged Only on Usage</h3>
                  <p className="text-gray-400">
                    Save interest costs by withdrawing only when needed.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Withdrawals & Repayments</h3>
                  <p className="text-gray-400">
                    Withdraw anytime within the limit and repay at your convenience.

                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Limits from ₹5 Lakhs to ₹5 Crores</h3>
                  <p className="text-gray-400">
                  Tailored to suit small, medium, and large enterprises.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Renewable Annually</h3>
                  <p className="text-gray-400">
                    Facilities are reviewed and renewed annually based on performance.</p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Moratorium & Grace Period</h3>
                  <p className="text-gray-400">
                    Many funding options come with repayment holiday until the course is completed.
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
            src="/images/H3.jpg" // Place this in /public
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
          Home Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Struggling with cash crunches? Don’t let financial gaps slow your growth. With Nihal Finserv’s OD/CC solutions, your business stays liquid, stable, and scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply?",
              text: "Nihal Finserv",
              points: [
    "SMEs, MSMEs, Startups, and Large Enterprises",
"Traders, Manufacturers, Wholesalers, and Distributors",
"Service-based businesses and professionals",
"Firms with regular working capital needs",
  ],
            },
            {
              city: " Why Choose OD/CC?",
              points: [
    "Maintain cash flow during slow cycles",
"Handle urgent vendor payments and operational needs",
"Purchase raw materials or maintain inventory",
"Use funds repeatedly without reapplying for a loan",
"Improve credit score with disciplined usage",
  ],
            },
            {
              city: "Why Nihal Finserv?",
              points: [
    "Tie-ups with major banks and NBFCs",
"Tailor-made working capital solutions",
"Transparent processes & quick sanctioning",
"Assistance with paperwork and renewals",
"Advisory on choosing between OD vs CC for your model",
  ],
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

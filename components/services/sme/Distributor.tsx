"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "PAN & Aadhar (Proprietor/Partner/Director)",
"GST certificate",
"Business registration certificate",
"Last 6 months’ bank statements",
"ITR & Balance Sheet (last 2 years)",
"Stock purchase invoices (if applicable)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/D1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Fuel Your Distribution Network with Reliable Financial Backing
          </h2>
          <p className="text-base mb-6">
           As a distributor, cash flow is everything. Whether you're handling FMCG, pharma, electronics, automotive, or industrial goods, having access to timely credit helps you stock up, meet demand, and keep the supply chain moving. At Nihal Finserv, we offer customized distributor loans to ensure your business stays ahead — always.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/D2.jpg" 
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
              What Our Distributor Loans Cover:
            </h2>
            <ol>
              <li>Bulk inventory purchases</li>
              <li>Vendor and supplier payments</li>
              <li>Expansion to new markets or regions</li>
              <li>Rolling working capital for recurring cycles</li>
              <li>Credit-based supply operations</li>
              <li>Seasonal demand stocking (Diwali, summer, etc.)</li>
            </ol>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Benifits
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
                  <h3 className="text-2xl font-semibold mb-2">Quick Approvals</h3>
                  <p className="text-gray-400">
                    Loans disbursed in days, not weeks
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Repayment Options</h3>
                  <p className="text-gray-400">
                   EMI & Bullet options tailored to your business
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral-Free Loans Available</h3>
                  <p className="text-gray-400">
                    Based on creditworthiness
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Sector-Specific Loan Plans</h3>
                  <p className="text-gray-400">
                    Designed for your industry type
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Dedicated Relationship Manager</h3>
                  <p className="text-gray-400">
                    To guide you through your loan journey
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
            src="/sme/D3.jpg"
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
          Distributor Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         Grow your network. Serve your market better.<br/>
Let Nihal Finserv be your financing partner.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Loan Features",
              points: [
    "Loan amount: ₹1 Lakh to ₹2 Crore",
"Tenure: 3 months to 36 months",
"Interest rates: Competitive & flexible",
"Collateral: Optional, based on profile",
"Documentation: Minimal, fast-track processing",
  ],
            },
            {
              city: "Eligibility Criteria:",
              points: [
    "Minimum 1 year of distribution operations",
"Valid GST and business registrations",
"Stable monthly turnover",
"Good banking and credit history",
  ],
            },
            
            
           
            {
              city: " Client Story",
              
              text: "As a pharmaceutical distributor, we needed fast working capital to stock up for the monsoon season. Nihal Finserv gave us a flexible credit line with zero collateral and helped us streamline supplier payments.",
              
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

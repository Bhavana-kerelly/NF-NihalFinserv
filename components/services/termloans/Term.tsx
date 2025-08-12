"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Short-Term Loans", link: "/services/structuredproducts/shorttermloans" },
    { name: "Long-Term Loans", link: "/services/structuredproducts/longtermloans" },
    { name: "Credit Cards", link: "/services/structuredproducts/creditcards" },
    
  ];
const steps = [
  "MSMEs & Enterprises seeking growth capital",
"Startups expanding operations or entering new markets",
"Manufacturers upgrading to new equipment",
"Traders & retailers boosting inventory",
"Service providers modernizing infrastructure",
"Individuals with large personal financial needs (property purchase, wedding, etc.)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/termloans/T1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Structured Funding. Predictable Payments. Long-Term Growth.
          </h2>
          <p className="text-base mb-6">
           Looking for long-term funding with structured repayments? Nihal Finserv offers customized Term Loans tailored to your business or personal financial goals. Whether it’s for business expansion, equipment purchase, working capital, or large-scale personal expenditures — we provide stability and flexibility, so you can grow with confidence.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/termloans/T2.jpg" // make sure to place the image in /public folder
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
              What Are Term Loans?
            </h2>
            <p>
              A Term Loan is a lump-sum loan granted for a specific purpose with a fixed repayment schedule over a defined period. It’s ideal for entrepreneurs, SMEs, and individuals seeking large funding with the comfort of predictable EMIs.
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
                <p className='text-gray-300 text-sm'>As an RBI-compliant financial consultancy and an authorized channel partner with top banks and NBFCs, Nihal Finserv brings credibility, transparency, and trust to your loan journey.</p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Loan Amount</h3>
                  <p className="text-gray-400">
                   ₹1 Lakh to ₹10 Crores (based on eligibility)
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tenure</h3>
                  <p className="text-gray-400">
                    1 to 10 years
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Repayment</h3>
                  <p className="text-gray-400">
                    Monthly EMIs or Quarterly Installments.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Usage</h3>
                  <p className="text-gray-400">
                    Business Expansion, Asset Purchase, Working Capital, etc.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral</h3>
                  <p className="text-gray-400">
                    Secured/Unsecured options available
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Interest Rate</h3>
                  <p className="text-gray-400">
                    Competitive rates from leading banks/NBFCs
                  </p>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Processing</h3>
                  <p className="text-gray-400">
                    Fast approval with minimal documentation
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
            Ideal For
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
            src="/termloans/T3.jpg" // Place this in /public
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
        TERM LOANS
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
          Term Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Fuel your next big step with a Term Loan from Nihal Finserv — where planning meets performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Benifits",
              points: [
    "Fixed tenure and EMI — easy financial planning",
"Flexible tenure and repayment structures",
"Part-prepayment and foreclosure options",
"Transparent process with no hidden charges",
"Credit counseling to choose the right lender",
"Support for both secured and unsecured term loans",
  ],
            },
            {
              city: "Documents Required: For Individual",
              points: [
    "KYC (Aadhaar, PAN)",
"Income proof (Salary Slips, ITRs)",
"Bank statements (last 6 months)",
"Property documents (if secured)",
  ],
            },
            {
              city: "For Business",
              points:  ["Business registration certificate",
"PAN and GST documents",
"ITRs (last 2-3 years)",
"Audited financials",
"Bank statements (last 6 months)",
"Projected financials (if required)",
              ]   
            },
            {
              city: "why choose Nihal Finserv",
              points:  ["Expert loan consultants for tailored advice",
"Wide lender network for best interest rates",
"Fast-track processing and disbursal",
"Business-friendly repayment structures",
"End-to-end support, from documentation to disbursement",
              ]   
            },

            {
              city: "How it Works?",
              points: [
    "1.Apply Online – Share your needs and basic details",
"2.Get Matched – We shortlist lenders that fit your profile",
"3.Document Upload – Quick and simple documentation",
"4.Approval & Disbursal – Receive funds directly in your account",
  ],
            },
            {
              city: "Real Story",
              text: "Nihal Finserv helped us secure a ₹50 lakh term loan to scale our operations and open two new outlets in Bengaluru. The structured EMI plan fit perfectly with our cash flow.",
            }
           
             
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

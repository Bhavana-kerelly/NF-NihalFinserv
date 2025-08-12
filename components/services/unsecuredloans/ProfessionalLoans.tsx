"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "KYC Documents (PAN, Aadhaar, Address Proof)",
  "Qualification Certificates & Professional License",
  "Bank Statements (Last 6–12 months)",
  "ITRs & Financials (2 years)",
  "Proof of Business/Practice Ownership",
  "Existing Loan Statements (if applicable)"
];


export default function ProfessionalLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/PF1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Empowering Professionals to Expand, Upgrade & Excel.
          </h2>
          <p className="text-base mb-6">
          Tailor-made finance solutions for doctors, chartered accountants, architects, engineers, lawyers, and other self-employed professionals.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/PF2.jpg" // make sure to place the image in /public folder
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
           What are Professional Loans?
            </h2>
            <p>
            Professional Loans are unsecured or secured loans designed specifically to meet the financial needs of qualified professionals. Whether you’re looking to set up a new practice, expand an existing one, invest in new technology, or manage working capital — Nihal Finserv helps you access the right financial tools with flexible terms and fast processing.
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
                  <h3 className="text-2xl font-semibold mb-2"> Business Expansion & Setup</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Clinic/Office Renovation & Equipment Purchase</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Working Capital for Operational Expenses</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Debt Consolidation at Lower Interest</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Technology & Software Upgrades</h3>
                  
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
            src="/unstructured/PF3.jpg" // Place this in /public
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
          Equipment Refinancing Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Apply for a Professional Loan with Nihal Finserv and let your expertise take center stage — without financial hurdles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply?",
              points: [
    "Doctors (MBBS, BDS, MD, MS, etc.)",
"Chartered Accountants (CAs)",
"Architects & Civil Engineers",
"Advocates & Legal Professionals",
"Medical Lab Owners & Diagnostic Centers",
"Trainers, Coaches & Consultants",
"Other Certified Professionals",
  ],
            },
            {
              city: "Key Benifits",
              points: [
    "Business Expansion & Setup",
"Clinic/Office Renovation & Equipment Purchase",
"Working Capital for Operational Expenses",
"Debt Consolidation at Lower Interest",
"Technology & Software Upgrades",
  ],
            },
            {
              city: "Suitable Uses:",
              points: [
    "Setting up a new clinic, office, or lab",
"Purchasing medical or diagnostic equipment",
"Investing in software tools like CRM, accounting, or ERP",
"Hiring staff or paying for licenses",
"Expanding into multiple locations or specialties",
"Funding professional development or certifications",
  ],
             
            },
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "Specialized Loan Programs for Professionals",
"Customized Funding Solutions Based on Your Practice Type",
"Tie-ups with Top Banks & NBFCs",
"Dedicated Relationship Managers",
"Fast Approval & Disbursal",
  ],
},
            {
              city: "Testimonials",
              
              text: "Thanks to Nihal Finserv, I was able to expand my dental practice into a second branch with modern tools — all without any collateral!",
              test: "As a CA managing multiple clients, getting funds for hiring staff and upgrading systems was seamless. Great support!",
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

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
"KYC (PAN, Aadhaar)",
"Business Registration Proof",
"GST certificate / Invoices / Contracts",
"6 months Bank Statement",
"ITRs (past 1–2 years if available)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/SP1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Service-Based Businesses with Tailored Financing
          </h2>
          <p className="text-base mb-6">
          Running a service business means managing people, projects, and payments — all at once. At Nihal Finserv, we offer specialized loan solutions for service providers to help you scale operations, manage cash flow, and take on bigger clients with confidence.
          </p>
          <p className="text-base mb-6">From freelancers and agencies to consultancies and facility management providers — we finance your growth.</p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/SP2.jpg"
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
              <li>Paying staff and contract teams</li>
              <li>Upgrading tech and tools</li>
              <li>Managing client billing cycles</li>
              <li>Marketing, expansion, or new office setup</li>
              <li>Bridging operational or project-based funding gaps</li>
              
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
                  <h3 className="text-2xl font-semibold mb-2">No Collateral Needed</h3>
                  <p className="text-gray-400">
                    Loans based on income & client profile
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Quick Approvals</h3>
                  <p className="text-gray-400">
                    Minimal paperwork, fast disbursal
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tailored Loan Sizes</h3>
                  <p className="text-gray-400">
                    From ₹50,000 to ₹1 Crore
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Repayment</h3>
                  <p className="text-gray-400">
                    EMI, Bullet, or Project-based payments
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Support for GST-based Income</h3>
                  <p className="text-gray-400">
                    Leverage your service invoices to get funded
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
            src="/sme/SP3.jpg"
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
          Service Provider
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
        We have financing tailored for your service model.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Loan Details:",
              points: [
    "Amount: ₹50,000 – ₹1 Crore",
"Tenure: 12 to 36 months",
"Interest: Competitive based on credit & business profile",
"Disbursal: Within 48–72 hours of approval",
"Repayment: Monthly EMIs or linked to revenue inflow",
  ],
            },
            {
              city: "Eligibility",
              points: [
    "Registered service-based business (proprietor, partnership, LLP, Pvt Ltd)",
"Minimum 6–12 months of operations",
"GST filings or service invoices",
"Stable income or recurring client base",
  ],
            },
            {
              city: " Let’s Help You Serve Better: Whether You're a:",
              points: [
    "Creative Agency",
"IT Consultant",
"Cleaning & Maintenance Contractor",
"Freelance Developer",
"Event Organizer",
"Logistics Coordinator",
"Educational or Coaching Provider",
  ],
            },
            
           
            {
              city: "Real Story. Real Growth.",
              
              text: "As a digital agency, we struggled with cash flow between projects. Nihal Finserv’s service provider loan helped us hire a new team and scale confidently.",
              
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

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Working Capital", link: "/services/structuredproducts/workingcapital" },
    { name: "Asset Finance", link: "/services/structuredproducts/assetfinance" },
    { name: "Leasing", link: "/services/structuredproducts/leasing" },
    { name: "Term Loans", link: "/services/structuredproducts/termloans" },
    { name: "Structed Finance", link: "/services/structuredproducts/structuredfinance" },
    
  ];
const steps = [
  "Partnerships with leading banks & NBFCs",
"Expert financial & legal due diligence",
"Fast-track approvals for eligible firms",
"Customized structuring for tax & cost efficiency",
"End-to-end documentation and compliance support",
"Dedicated relationship manager for your account",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/coorporate/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Big Visions. Bold Moves. Backed by Smart Capital.
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we empower your business to scale, diversify, and innovate with customized corporate loan solutions. Whether you're expanding your operations, investing in new technology, or boosting your working capital — we ensure you get the right funding at the right time.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/C2.jpg" // make sure to place the image in /public folder
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
              What Are Coorporate Loans?
            </h2>
            <p>
              A Corporate Loan is a high-value business loan designed specifically for medium to large enterprises looking to finance growth, infrastructure, acquisitions, or operational needs. These loans offer longer tenures, flexible repayment terms, and higher limits — aligned with your company’s financial strategy.
            </p>
            
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Purpose-Fit Funding For
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
                  <h3 className="text-2xl font-semibold mb-2"> Infrastructure Development</h3>
                  <p className="text-gray-400">
                    With deep market knowledge and financial acumen, we ensure you get the best-fit product aligned with your short and long-term financial goals.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Factory Setup or Plant Expansion</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Large Inventory Procurement</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Working Capital Support</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Mergers & Acquisitions</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> New Office or Branch Launches</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Technology Upgrades / ERP Setup</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Global Market Expansion</h3>
                 
                </div>
              </div>
            </div>
          </section>
        

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why Choose Nihal Finserv
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
            src="/coorporate/C3.jpg" 
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
        CORPORATE LOANS
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
           Corporate Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          At Nihal Finserv, we’re more than loan facilitators—we’re your financial growth partners. Let us help you unlock the potential of your assets and achieve your ambitions with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Key Features ",
              points: [
    "Loan Amount	₹50 Lakhs to ₹100 Crores+",
"Tenure	1 to 10 Years",
"Interest Rates	Competitive, based on profile",
"Repayment Options	EMI, bullet, structured",
"Security	Secured / Unsecured options",
"Top-Up Facility	Available after timely repayment",
  ],
            },
            {
              city: "Eligibility Criteria",
              points: [
    "Business Age	3+ years of operations",
"Turnover	₹5 Crores+ annually",
"Profitability	Last 2 years preferred",
"Docs Required	Company financials, ITRs, bank statements, KYC, project reports, etc.",
"Don’t meet all the criteria? We can still help with alternate structures or working capital solutions.",
  ],
            },
             {
              city: "Loan Structuring Options",
              points: [
    "Term Loan with Moratorium",
"Working Capital OD/CC Limits",
"Project-Based Finance",
"Lease Rental Discounting",
"Debt Consolidation / Refinancing",
  ],
            },
            {
              city: "Client Testimonial",
              text:  "We partnered with Nihal Finserv for a ₹15 Crore loan to expand our manufacturing unit. Their team handled everything from structuring to disbursement with full professionalism.",
              
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

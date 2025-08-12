"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Manufacturer", link: "/services/structuredproducts/manufacturer" },
    { name: "Distributor", link: "/services/structuredproducts/distributor" },
    { name: "Retailer", link: "/services/structuredproducts/retailer" },
    { name: "Service Provider", link: "/services/structuredproducts/serviceprovider" },
    { name: "Vendor", link: "/services/structuredproducts/vendor" },
    
  ];
const steps = [
  "Business KYC (PAN, Aadhar, GST, Address Proof)",
"Past 1–2 years’ ITRs and Financials",
"Bank Statements (last 6 months)",
"Business registration or trade license",
"Existing loan statements (if any)",
]

export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/sme/S1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Small and Medium Businesses to Scale Smarter
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we recognize the heart of the Indian economy — Small and Medium Enterprises (SMEs). Whether you're a trader, manufacturer, service provider, or startup, our SME Loan solutions are designed to support your ambition with speed, flexibility, and reliability.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sme/S2.jpg"
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
              Fuel Your Business Growth
            </h2>
            <p>
              Whether You Need Funds For
            </p>
            <ol>
                <li> Buying Machinery or Equipment</li>
<li>Purchasing Inventory or Raw Materials</li>
<li>Expanding Infrastructure</li>
<li>Managing Working Capital Gaps</li>
<li>Digitizing or Automating Operations</li>
            </ol>
            <p>Our SME loan offerings are structured to fit your unique business cycle and cash flow needs.</p>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Why Choose Nihal Finserv?
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
                  <h3 className="text-2xl font-semibold mb-2"> Quick Approaches</h3>
                  <p className="text-gray-400">
                    Fast-tracked processing for time-sensitive needs
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Minimal Paperwork</h3>
                  <p className="text-gray-400">
                    Hassle-free documentation process
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Flexible Tenure</h3>
                  <p className="text-gray-400">
                    Short to medium-term repayment options
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral-Free Options</h3>
                  <p className="text-gray-400">
                    Loans available without security for eligible profiles
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Competitive Interest Rates</h3>
                  <p className="text-gray-400">
                    Tailored to suit business performance & credit health
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
            src="/sme/S3.jpg"
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
        SME LOANS
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
          Secured Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          At Nihal Finserv, we’re more than loan facilitators—we’re your financial growth partners. Let us help you unlock the potential of your assets and achieve your ambitions with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Basic Eligibility",
              points: [
    "Business operational for at least 1–3 years",
"Valid GST and PAN registration",
"Audited financial statements",
"Satisfactory banking and credit record",
  ],
            },
            {
              city: "Who is it for?",
              points: [
    "Retail & Wholesale Traders",
"Small Manufacturing Units",
"Distributors & Wholesalers",
"Service Providers",
"Repair & Maintenance Businesses",
"Food Processing Units",
  ],
            },
            {
              city: "Clients experience",
              text:  "“Our textile unit was stuck due to a machinery upgrade delay. Nihal Finserv cleared our SME loan within 5 days — zero collateral, simple paperwork, and complete handholding. It’s rare to find such clarity and support.",
              
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

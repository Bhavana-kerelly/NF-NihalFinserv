"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "Equipment Finance",
 "Vehicle Finance",
 "Lease Rentals",
 "Asset Refinance",
 "Operating Lease & Hire Purchase",
];


export default function CarLoansNerAndFinancing() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/coorporate/A1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empower Your Growth with Smart Asset-Based Funding
          </h2>
          <p className="text-base mb-6">
            Unlock the value of your current or future assets to drive business expansion, operations, or equipment acquisition. At Nihal Finserv, our Asset Finance solutions help you acquire, lease, or refinance business-critical assets — without straining your working capital.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/A2.jpg" // make sure to place the image in /public folder
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
              What is Asset Finance?
            </h2>
            <p>
              Asset Finance is a funding solution that allows businesses to either:
            </p>
            <ol>
              <li>Acquire new equipment, machinery, or vehicles without upfront payments, or</li>
              <li>Leverage the value of existing assets to raise working capital.</li>
            </ol>
            <p>It’s an ideal route for businesses looking to scale efficiently, manage cash flow smartly, and maintain liquidity while building assets.</p>
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Amount</h3>
                  <p className="text-gray-400">
                    ₹1 Lakh – ₹10 Crores+
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Funding Type</h3>
                  <p className="text-gray-400">
                    Lease / Hire Purchase / Refinance
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tenure</h3>
                  <p className="text-gray-400">
                    12 to 84 months
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Interest Rates</h3>
                  <p className="text-gray-400">
                    Customized as per asset type
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Collateral</h3>
                  <p className="text-gray-400">
                    Primarily the financed asset</p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Processing Time</h3>
                  <p className="text-gray-400">
                    Quick approvals & disbursal
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
            Our Asset Finance Offerings
          </h2>
          
          
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
            src="/coorporate/A3.jpg" 
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
          Asset Finance
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Let us help you acquire or refinance assets the smart way.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Perfect For ",
              points: [
    "Buying industrial machinery or plant equipment",
"Financing commercial vehicles or fleets",
"Acquiring office furniture, computers, or systems",
"Leasing high-value technical equipment",
"Refinancing owned assets to free up working capital",
  ],
            },
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    " Vendor tie-ups for better asset pricing",
"Attractive interest rates with flexible EMIs",
"Quick processing & minimal documentation",
"Tailored financing as per your asset lifecycle",
"Transparent ownership and depreciation structure",
  ],
            },
           
            
            {
              city: "Who Can Apply",
              points: [
    "Business Type:	MSMEs, Corporates, Startups, Traders, Service Providers",
"Vintage:	1 year+ in operations",
"Documents:	KYC, Bank Statements, ITRs, GST Returns, Asset Invoices",
  ],
},
            {
              city: " Client Review",
              
              text: "Our business often faces seasonal dips in cash flow. Nihal Finserv’s working capital loan kept our operations steady. Great service and fast approvals!",
              
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
  

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "KYC of Business & Owners",
  "Business PAN and GST Certificate",
  "Proof of Business Existence (Udyam/Udyog Aadhaar/MSME)",
  "Bank Statements (Last 6–12 Months)",
  "Audited ITRs & Balance Sheets (Last 2 Years)",
  "Quotation/Proforma Invoice of Machinery",
  "Collateral Documents (if opting for secured loan)"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/I1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Powering Your Business with the Right Machinery at the Right Time
          </h2>
          <p className="text-base mb-6">
           In today’s competitive manufacturing and industrial landscape, having advanced machinery is not a luxury—it’s a necessity. Whether you’re expanding production, automating processes, or starting a new unit, Nihal Finserv offers Industrial Machinery Loans designed to keep your operations running smoothly without straining your working capital.
          </p>
          
          <p className="text-base">
           Get the tools you need to scale faster, produce better, and compete stronger—with flexible financing solutions that work on your terms.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/I2.jpg" // make sure to place the image in /public folder
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
            What is an Industrial Machinery Loan?
            </h2>
            <p>
             An Industrial Machinery Loan is a business loan specifically designed to help manufacturing units, factories, and industrial setups purchase or upgrade heavy equipment and machinery. These loans help you spread the cost of expensive machines over easy EMIs, with options for new or used machinery, both domestic and imported.
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Amounts from ₹5 Lakhs to ₹10 Crores</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Quick Sanctions within 3–7 Working Days</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Up to 90–100% Machinery Cost Financing</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Repayment Tenure – 3 to 10 Years</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Refinancing Options for Existing Equipment</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  Low Interest Rates & Custom EMI Plans</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  Import Machinery Loans Available</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  GST Bill/Invoice-Based Financing</h3>
                  
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
            src="/unstructured/I1.jpg" // Place this in /public
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
          Industrial Machinery Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Let your machinery be your strength, not a financial burden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply",
              points: [
    "Small & Medium Enterprises (SMEs)",
"Large Manufacturing Units",
"Engineering & Auto Component Manufacturers",
"Fabrication Units",
"Food Processing & Packaging Plants",
"Textile, Plastic, Pharma, and Chemical Units",
  ],
            },
            {
              city: "Machinery Covered",
              points: [
    "CNC Machines, Lathes, and Milling Machines",
"Injection Moulding & Blow Moulding Machines",
"Printing & Packaging Machinery",
"Food Processing Equipment",
"Pharma Manufacturing Equipment",
"Textile Looms and Dyeing Machines",
"Sheet Metal Fabrication Tools",
"Hydraulic Press, Welding, and Tooling Machines",
"Imported Machines & Assembly Line Units",
  ],
            },
            {
              city: "Why Choose Nihal Finserv",
              points: [
    "Specialised Loans for Manufacturing & Industrial Sector",
"30+ Partner Banks & NBFCs to Get You the Best Rates",
"Loan Structuring Based on Your Cash Flow & GST Returns",
"Refinancing Support for Existing Machines",
"Assistance with Imported Equipment Financing",
"Both Secured & Unsecured Loan Options",
  ],
             
            },
            {
              city: "Empowering Real Businesses",
              
              text: "We needed an imported CNC machine from Germany to scale production. Nihal Finserv helped us get 100% funding at competitive rates and handled all documentation quickly.",
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

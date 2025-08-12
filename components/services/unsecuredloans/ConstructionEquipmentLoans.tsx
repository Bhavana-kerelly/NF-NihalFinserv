"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "KYC Documents of Business/Individual",
  "Business Registration (GST, PAN, Udyam, etc.)",
  "Latest ITRs and Financials (2–3 years)",
  "Bank Statements (Last 6–12 Months)",
  "Proforma Invoice or Quotation of Equipment",
  "Work Order or Contract Copy (if applicable)",
  "Asset Documents (for secured loans)"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Build Bigger. Dig Deeper. Reach Higher – With the Right Financial Support.
          </h2>
          <p className="text-base mb-6">
          Construction demands precision, power, and the right equipment. Whether you're a contractor, builder, infrastructure developer, or EPC company, Nihal Finserv helps you finance heavy-duty construction equipment without hampering your cash flow.
          </p>
          
          <p className="text-base">
           From excavators to cranes, concrete mixers to road rollers — our Construction Equipment Loans are tailored to get your projects moving faster, more efficiently, and with ease.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/C2.jpg" // make sure to place the image in /public folder
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
            What is a Construction Equipment Loan?
            </h2>
            <p>
             A Construction Equipment Loan is a type of asset-backed or unsecured loan offered to businesses or individuals to purchase, lease, or refinance heavy construction machinery. These loans help contractors and construction firms invest in both new and used equipment, with options to finance domestically manufactured or imported machinery.
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Amounts from ₹5 Lakhs to ₹25 Crores</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Sanctions within 3–7 Working Days</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Up to 100% Equipment Financing</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Tenure – 1 to 7 Years</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Top-Up & Refinance Facility Available</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Funding Available for Imported Machines</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Competitive Interest Rates Based on Credit Profile</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  Collateral-Free Options for Eligible Profiles</h3>
                  
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
            src="/unstructured/C3.jpg" // Place this in /public
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
          Construction Equipment Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Invest in the right machinery with smart, structured financing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply",
              points: [
    "Civil Contractors",
"Infrastructure Developers",
"Road & Bridge Construction Firms",
"Builders and Real Estate Developers",
"Mining & Earthwork Contractors",
"Government Contractors",
"Equipment Rental Companies",
  ],
            },
            {
              city: " Equipment Covered:",
              points: [
    "Excavators, Backhoe Loaders, Wheel Loaders",
"Bulldozers, Trenchers, and Graders",
"Concrete Mixers and Transit Mixers",
"Tower Cranes, Mobile Cranes, and Boom Lifts",
"Asphalt & Road Paving Machinery",
"Pile Driving Machines and Earth Movers",
"Compactors and Rollers",
"Drilling & Mining Equipment",
"Material Handling Systems",
  ],
            },
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "Specialist in Infrastructure & Equipment Financing",
"30+ Lending Partners for Multiple Loan Offers",
"Refinance Existing Equipment at Better Rates",
"Invoice-Based Sanctions Without Heavy Documentation",
"Customized EMI & Tenure Plans Based on Project Cash Flow",
"Dedicated Loan Advisors to Guide You End-to-End",
  ],
             
            },
            {
              city: "Powering Real Projects Across India",
              
              text: "When we landed a state highway contract, we needed 3 new machines urgently. Nihal Finserv helped us get 100% finance in less than a week!",
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

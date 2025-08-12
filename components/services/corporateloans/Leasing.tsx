"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "Operating Lease",
 "Finance Lease",
 "Hire Purchase",
 "Sale & Lease Back",
];


export default function CarLoansNerAndFinancing() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/coorporate/L1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Smarter Asset Access Without Ownership Burden
          </h2>
          <p className="text-base mb-6">
            Want to use high-value equipment, vehicles, or technology without locking up capital? Leasing from Nihal Finserv gives you the advantage of using essential business assets with lower upfront costs, predictable payments, and no ownership stress.
          </p>
          <p>Whether you're a startup looking to stay asset-light or a growing company optimizing cash flow — leasing is your flexible, cost-effective alternative to buying.</p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/L2.jpg" // make sure to place the image in /public folder
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
              What is Leasing?
            </h2>
            <p>
              Leasing is a financial arrangement where you use an asset (machinery, vehicles, equipment, etc.) for a fixed term by paying regular rentals, without having to purchase it upfront.</p>
            <p>Depending on your needs, you can:</p>
            <ol>
              <li>Use the asset without owning it (Operating Lease), or</li>
              <li>Own it at the end of the term (Finance Lease/Hire Purchase).</li>
            </ol>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Benifits
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
                  <h3 className="text-2xl font-semibold mb-2">No large upfront investment</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> EMIs often lower than loan EMIs</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tax benefits on lease rentals</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Off-balance sheet asset management </h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Freedom to upgrade at lease-end</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Easy budgeting with predictable costs </h3>
                  
                </div>
              </div>
            </div>
          </section>
        

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
           Types of Leasing we offer:
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
            src="/coorporate/L3.jpg" // Place this in /public
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
          Leasing
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Let us help you access the best assets without breaking your budget.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "What You Can Lease",
              points: [
    "Commercial Vehicles (cars, trucks, delivery vans)",
"Industrial Equipment & Machinery",
"Medical Devices & Diagnostic Equipment",
"IT & Office Equipment",
"Commercial Real Estate/Modular Office Setups",
  ],
            },
            {
              city: "Who is it for?",
              points: [
    "Growing businesses needing equipment fast",
"Startups managing lean capital",
"Hospitals or labs upgrading diagnostics",
"Logistics firms managing fleets",
"Offices scaling operations affordably",
  ],
            },
           
            
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "End-to-end lease management & vendor coordination",
"Transparent contracts, no hidden fees",
"Fast processing & flexible lease terms",
"Custom solutions for every industry",
"Dedicated support throughout the lease lifecycle",
  ],
},
            {
              city: " Client Experience",
              
              text: "Leasing our delivery fleet through Nihal Finserv saved us lakhs in upfront cost. We got newer models and didn’t have to worry about depreciation. Total win!",
              
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

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "Equity-Linked Debentures (ELDs)",
"Market-Linked Debentures (MLDs)",
"Capital-Protected Notes",
"Fixed Coupon Notes with Equity Upside",
"Credit-Linked Notes",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/structuredproducts/SI1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Tailored Investment Solutions with Predictable Returns & Risk Control
          </h2>
          <p className="text-base mb-6">
          Looking to strike the perfect balance between risk and reward? With Structured Investments from Nihal Finserv, you gain access to a unique blend of debt security and equity upside — all designed around your financial goals and risk appetite.
          </p>
          <p className="text-base mb-6">
          Structured investments are ideal for high-net-worth individuals (HNIs), seasoned investors, or businesses seeking customized, market-linked growth solutions.
          </p>
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/structuredproducts/SI2.jpg"
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
              How It Works
            </h2>
            <p className="text-base mb-6">Structured investments are created using a combination of:</p>
            <ol>
              <li>Debt instruments (like bonds, NCDs)</li>
              <li>Derivatives (options on equity indices or stocks)</li>
             
            </ol>
            <p className="text-base mb-6">This mix allows for fixed income protection along with potential upside linked to market performance — without full equity risk exposure.</p>
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
                  <h3 className="text-2xl font-semibold mb-2">Capital Protection Options</h3>
                  <p className="text-gray-400">
                    Choose plans with partial or full principal protection
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Market-Linked Growth</h3>
                  <p className="text-gray-400">
                    Participate in equity markets without direct exposure
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tailor-Made Structures</h3>
                  <p className="text-gray-400">
                    Customize tenures, underlying assets, returns, and risks
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Diversification Tool</h3>
                  <p className="text-gray-400">
                  Reduce portfolio concentration by including hybrid products
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tax-Efficient Options</h3>
                  <p className="text-gray-400">
                   Benefit from structures optimized for taxation efficiency
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
            Popular Structured Products We Offer
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
            src="/structuredproducts/SI3.jpg"
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
          Structured Investments
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
       Talk to our structured investment experts to build your customized portfolio today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Ideal For",
              points: [
    "High-net-worth investors looking for optimized risk-return balance",
"Corporates and family offices diversifying with smarter allocation",
"Investors with a moderate risk appetite but a goal for better-than-debt returns",
  ],
            },
            {
              city: "Key Benifits",
              points: [
    "Access to top-rated structured product issuers",
"Personalized structuring based on your investment horizon and needs",
"Professional advisory to align investments with financial goals",
"Complete transparency on risk and performance parameters",
"Regular performance tracking and exit planning support",
  ],
            },
            
            
           
            {
              city: "Example",
              
              text: "A client with ₹50 lakhs to invest can choose a 3-year capital-protected note linked to Nifty 50. At maturity, they get their principal back, with potential upside if the index performs well, while downside is protected.",
              
            },
            {
              city: "Disclaimer",
              
              text: "Structured products are subject to market risks and may not be suitable for all investors. Capital protection is conditional and depends on the product design and issuer rating.",
              
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

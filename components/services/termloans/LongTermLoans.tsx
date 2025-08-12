"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business Term Loans",
  "Home Loans",
  "Loan Against Property (LAP)",
  "Education Loans",
  "Machinery or Equipment Finance",
  "Construction Equipment Loans"
];


export default function SchoolAndCollegeFunding() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/termloans/L1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
          Big Dreams. Long-Term Funding. Smarter Repayment.
          </h2>
          <p className="text-base mb-6">
            When your goals are ambitious — like expanding your business, purchasing property, or investing in large-scale assets — long-term loans are your best financial partners. At Nihal Finserv, we help you secure structured long-tenure loans with fixed EMIs, competitive interest rates, and flexible repayment options.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/termloans/L2.jpg" // make sure to place the image in /public folder
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
              What is a Long-Term Loan?
            </h2>
            <p>
              A Long-Term Loan is a type of financing where the repayment period ranges from 2 years to 15+ years, depending on the loan type and borrower profile. These loans are ideal for major investments, business growth, property purchases, and large personal expenses that need extended repayment timelines.
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
                  <h3 className="text-2xl font-semibold mb-2"> Loan Amount</h3>
                  <p className="text-gray-400">
                   ₹5 Lakhs to ₹25 Crores+
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tenure</h3>
                  <p className="text-gray-400">
                   2 years to 20 years
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Repayment</h3>
                  <p className="text-gray-400">
                    Monthly EMIs
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Security</h3>
                  <p className="text-gray-400">
                   Collateral required (property, equipment, etc.)
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Interest Rate</h3>
                  <p className="text-gray-400">
                   Competitive & fixed/variable options
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Processing Time</h3>
                  <p className="text-gray-400">
                    3–10 working days
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
             Types of Long-Term Loans We Facilitate
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Build your future with a strong financial foundation. Choose Nihal Finserv’s Long-Term Loans to support your vision.

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
            src="/termloans/L3.jpg" // Place this in /public
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
          Long Term Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Build your future with a strong financial foundation. Choose Nihal Finserv’s Long-Term Loans to support your vision.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "ideal Use Cases",
              points: [
    "Business Expansion",
"Home Purchase or Construction",
"Plant & Machinery Acquisition",
"Higher Education Loans",
"Debt Consolidation",
"Real Estate or Commercial Investments",
  ],
            },
            {
              city: "Benifits",
              points: [
    "Higher loan eligibility",
"Affordable EMIs due to longer tenure",
"Tailored repayment plans to match cash flow",
"Improves financial predictability and budgeting",
"Fixed interest option for EMI stability",
"End-to-end guidance & documentation support",
  ],
            },
           
            {
              city: "How to Apply",
              points: [
    "1.Share your requirement – Speak to our experts",
"2.Loan structuring – Tailored to your business/personal plan",
"3.Document submission – With our full support",
"4.Loan approval & disbursal – Fast-track processing",
  ],
},
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "Access to top banks and NBFCs",
"Loans structured to your specific goals",
"Transparent terms and no hidden charges",
"Dedicated support from application to closure",
"Personalized financial planning assistance",
  ],
},
            {
              city: " Real Client Experience",
              
              text: "Nihal Finserv helped us secure a ₹1.5 crore term loan for factory expansion with a 10-year tenure. The entire process was smooth, and their team handled everything professionally.",
              
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

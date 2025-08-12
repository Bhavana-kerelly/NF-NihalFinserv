"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "End-to-end service under one roof",
"Tie-ups with top banks, NBFCs & vehicle dealers",
"Doorstep assistance for documentation",
"Personalized EMI planning and loan restructuring",
];


export default function CarLoansNerAndFinancing() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Drive Your Dream Car with Ease
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we understand that owning a car is more than just a luxury—it's a necessity, a symbol of independence, and a part of your lifestyle. Whether you're buying a brand-new vehicle or want to refinance your existing car loan for better terms, our customized car loan solutions are built around your needs.
          </p>
          
          <p className="text-base">
            With access to leading banks and NBFCs, we offer competitive rates, faster approvals, and hassle-free processing, making your car ownership journey smoother than ever.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="text-gray-700 text-lg space-y-6">
             <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">Car Loan Refinancing</h3>
            <p>Already have a car loan with high interest or EMI burden? Switch to a better plan with our car loan refinancing options, and:</p>
            <ol>
              <li>Reduce your monthly EMI</li>
              <li>Get a lower interest rate</li>
              <li>Extend repayment tenure</li>
              <li>Improve cash flow</li>
            </ol>
            
            
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h3 className='className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6'>New Car Loans</h3>
            <p>Planning to buy your first or next car? We provide quick and easy loans for:</p>
            <ol>
              <li>All types of vehicles – Hatchbacks, Sedans, SUVs, Electric Cars, and Luxury Cars</li>
              <li>Brand new cars from dealerships</li>
              <li>85%–100% of on-road price financing</li>
              <li>Flexible tenures ranging from 12 to 84 months</li>
            </ol>
           
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
                  <h3 className="text-2xl font-semibold mb-2">Attractive Interest Rates</h3>
                  <p className="text-gray-400">
                    Starting from as low as 7.5% p.a.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Quick Approvals</h3>
                  <p className="text-gray-400">
                    Minimal documentation, instant eligibility check, and same-day approvals in most cases.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Tenure</h3>
                  <p className="text-gray-400">
                    From 1 year up to 7 years—choose what works for you.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Zero Hidden Charges</h3>
                  <p className="text-gray-400">
                    Transparent processing with full disclosure of all fees and charges.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Top-Up Loan Option</h3>
                  <p className="text-gray-400">
                    Need extra funds while refinancing? Ask us about additional top-up loans on your car.
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
            Why Choose Nihal Finserv?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Whether it's buying your dream car or easing your existing loan burden, Nihal Finserv helps you steer toward your goals—faster and stress-free.
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
            src="/images/C3.jpg" // Place this in /public
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
          CarLoansAndFinancing
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Whether it's buying your dream car or easing your existing loan burden, Nihal Finserv helps you steer toward your goals—faster and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply?",
              points: [
    "Salaried professionals with regular income",
"Self-employed individuals or business owners",
"Individuals with existing car loans looking for better terms",
"First-time car buyers or those upgrading their vehicle",
  ],
            },
            {
              city: "How Nihal Finserv Helps You",
              points: [
    "Compare multiple car loan offers to choose the best one",
"Negotiate better rates and processing fees with partnered lenders",
"Assist in complete documentation and application process",
"Coordinate with bank and dealership for smooth disbursal",
  ],
            },
            {
              city: "Required Documents: For New Car Loan",
              text: "New Car Loan",
              points: [
    "PAN Card, Aadhaar, Passport-size photo",
"Address Proof",
"Salary Slips/Bank Statements (last 3–6 months)",
"Car Proforma Invoice",
  ],
            },
            {
              city: "For Refinancing",
              
              points: [
    "Existing loan documents",
"RC Book",
"Insurance copy",
"Loan repayment statement (if any)",
  ],
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

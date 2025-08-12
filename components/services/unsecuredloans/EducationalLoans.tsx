"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Admission Letter from Institution",
  "Fee Structure",
  "KYC of student & co-applicant (PAN, Aadhaar)",
  "Income proof of co-applicant (Salary slips/ITR)",
  "Bank statements (last 6 months)",
  "Academic Records (Mark sheets, Certificates)",
  "Collateral documents (if applicable)"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/E1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Empowering Futures with Affordable Education Financing
          </h2>
          <p className="text-base mb-6">
         Whether it’s India or abroad — fund your academic journey with smart education loans tailored to your needs.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/E2.jpg" // make sure to place the image in /public folder
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
           What is an Educational Loan?
            </h2>
            <p>
           An Educational Loan is a specialized loan designed to finance the cost of higher education — including tuition, accommodation, books, travel, and living expenses. With Nihal Finserv, you can access a wide network of banks and NBFCs offering flexible education loans for undergraduate, postgraduate, vocational, and professional courses both in India and abroad.
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
                  <h3 className="text-2xl font-semibold mb-2"> Loan Amount 50000 to 50 Lakhs</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Repayment Tenure up to 15 years</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Moratorium Course duration + 6 to 12 months grace period</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Interest Rates Competitive & Subsidy Options Available</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral Optional (based on loan amount & course)</h3>
                  
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
            src="/unstructured/E3.jpg" // Place this in /public
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
          Educational Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         Nihal Finserv — Investing in your education today, for a brighter tomorrow.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Who Can Apply?",
              points: [
    "Students planning to pursue higher studies in India or overseas",
"Parents or guardians acting as co-applicants",
"Indian nationals with confirmed admission to recognized institutions",
  ],
            },
            {
              city: "Loan Covers",
              points: [
    "Tuition Fees",
"Hostel/Accommodation Charges",
"Books & Study Materials",
"Laptop/Equipment Costs",
"Travel Expenses (for overseas education)",
"Living and Personal Expenses (select lenders)",
  ],
            },
            {
              city: "Eligibility Criteria",
              points: [
    "Indian citizen aged 18–35 years",
"Confirmed admission into a recognized course/institution",
"Co-applicant (parent/guardian) with steady income",
"Good academic performance",
"For higher amounts: Collateral or guarantor may be required",
  ],
             
            },
            {
              city: "Why Choose Nihal Finserv?",
              points: [
    "Specialized loan options for 1000+ domestic & international institutes",
"Expert counselling and end-to-end application support",
"Fast processing and approval",
"Access to major banks, NBFCs, and education loan partners",
"Assistance for visa, forex & insurance (for abroad studies)",
  ],
},
            {
              city: " Real Story",
              
              text: "With Nihal Finserv’s help, I got my educational loan sanctioned in just 5 days for my MBA in the UK. The process was smooth, and I felt supported at every step.",
              
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

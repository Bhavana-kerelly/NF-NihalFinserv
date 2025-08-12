"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "PAN, Aadhaar, Address Proof",
  "Salary Slips (Last 3 Months)",
  "Bank Statements (Last 6 Months)",
  "Form 16 / IT Returns",
  "Property Documents",
  "ITR (Last 2-3 Years) with Computation",
  "Profit & Loss Statements, Balance Sheet",
  "GST Certificate / Business Proof",
  "Property Documents"
];


export default function HomeLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/home1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Your Dream Home is Now Within Reach
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we believe that a home is not just a place—it's a feeling, a legacy, and a foundation for your future. That’s why we offer customized and affordable home loan solutions that help you turn your dream into a permanent address.
          </p>
          
          <p className="text-base">
           Whether you’re buying your first flat, constructing your independent house, or investing in a second property, our expert team ensures a hassle-free and transparent process from loan application to possession.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/home2.jpg" // make sure to place the image in /public folder
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

          {/* Right Side */}
         <div className="text-gray-700 text-lg space-y-6">
            <h3 className='className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6'>Our Home Loan Solutions Include:</h3>
            
<ol>
  <li>Purchase of Ready-to-Move Homes</li>
  <li>Home Construction on Your Own Plot</li>
  <li>Flat/Apartment Purchase in Under-Construction Projects</li>
  <li>Home Renovation & Extension Loans</li>
  <li>Balance Transfer from Other Banks/NBFCs</li>
  <li>Top-up Loans on Existing Home Loans</li>
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Amounts from ₹5 Lakhs to ₹5 Crores</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tenure up to 30 Years</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Attractive & Flexible Interest Rates (Fixed/Reducing Balance)</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Minimum Documentation & Quick Processing</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Loans up to 90% of Property Value</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Balance Transfer with Top-up Option</h3>
                  
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
           Your ideal home awaits—and Nihal Finserv is here to make it happen.
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
            src="/images/home3.jpg" // Place this in /public
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
          Home Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Your ideal home awaits—and Nihal Finserv is here to make it happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Eligibility Criteria",
              points: [
    "Salaried Individuals (Govt./Private Sector)",
"Self-Employed Professionals & Business Owners",
"NRIs with Valid Income Proof",
"Co-applicants like spouse/parents to enhance eligibility",
  ],
            },
            {
              city: "Why Choose Nihal Finserv",
              points: [
    "Wide Network of Banks & NBFCs",
"Quick Sanction & Disbursal",
"Dedicated Relationship Manager",
"Expert Loan Advisory Services",
"End-to-End Documentation Support",
"Transparent Charges – No Hidden Fees",
  ],
            },
            {
              city: "Clients Testimonial:",
              text:  "With Nihal Finserv’s guidance, I got my dream flat loan approved in just 7 days! Their process was clear, supportive, and stress-free.",
             
            },
            {
              city: "EMI Calculator – Plan Your Budget Wisely",
              
              text: "Use our smart EMI calculator to estimate your monthly outflow and choose the perfect tenure that fits your pocket.",
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

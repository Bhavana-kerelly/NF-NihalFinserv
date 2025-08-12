"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Identity & address proof (Aadhaar, PAN, Passport)",
  "School/college admission letter or fee structure",
  "Previous academic records",
  "Income proof (salary slips, ITR, bank statements)",
  "Collateral documents (for secured loans)"
];


export default function SchoolAndCollegeFunding() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/S1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Invest in Education, Empower the Future
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we believe that education is the most powerful investment you can make for your child—or yourself. Whether it's admission into a reputed school, enrolling in a top-tier university, or pursuing higher education overseas, we help you bridge the financial gap with tailor-made School and College Funding solutions.
          </p>
          
          <p className="text-base">
            WhethWith rising tuition fees, living expenses, and other educational costs, it’s essential to have access to the right financial support at the right time. Our dedicated funding solutions are designed to ease the burden and support your long-term educational goals.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/S2.jpg" // make sure to place the image in /public folder
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
             What is School/College Funding?
            </h2>
            <p>
              A School/College funding is a specialized financial product aimed at helping parents or students meet the complete cost of education—including tuition fees, hostel charges, books, transportation, and even overseas expenses. We work closely with reputed banks and NBFCs to offer secured and unsecured educational loan options, based on your requirements.
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
                  <h3 className="text-2xl font-semibold mb-2">High Covers All Educational Expenses</h3>
                  <p className="text-gray-400">
                    Tuition fees, admission charges, books, uniforms, laptops, exam fees, travel, and more.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Loan Options</h3>
                  <p className="text-gray-400">
                    Choose between secured and unsecured loans depending on the loan amount and financial profile.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Attractive Interest Rates</h3>
                  <p className="text-gray-400">
                    Competitive rates with flexible repayment schedules designed to suit working parents or students post-education.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Quick Approvals & Minimal Documentation</h3>
                  <p className="text-gray-400">
                   We help you get funding on time, especially when admission deadlines are tight.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Funding for India & Abroad</h3>
                  <p className="text-gray-400">
                    Whether you're applying to a school in India or pursuing international education, we’ve got you covered.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Moratorium & Grace Period</h3>
                  <p className="text-gray-400">
                    Many funding options come with repayment holiday until the course is completed.
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
            Required Documents
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
            src="/images/S3.jpg" // Place this in /public
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
          SchoolAndCollegeFunding
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Whether it’s school admissions, university funding, or global education dreams, Nihal Finserv stands with you at every step. Let us take care of the finances—so you can focus on your or your child’s future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Ideal Scenarios",
              points: [
    "Paying yearly school fees or term fees for children",
"Funding a UG/PG degree at a university",
"Managing study-abroad expenses (flight, visa, accommodation)",
"Financing professional or technical courses (MBA, MBBS, Engineering, etc.)",
],
            },
            {
              city: "Who Can Apply?",
              points: [
    "Parents/Guardians of school-going children",
"Students aged 18+ applying for college or university",
"Salaried or self-employed individuals with regular income",
"Indian residents with valid ID proof",
  ],
            },
            {
              city: "How Nihal Finserv Supports You:",
              text:  "We know how critical timing is when it comes to admissions. That’s why our expert advisors ensure quick turnaround with a focus on transparency and clarity.",
              points: [
    "We assess your financial profile and identify the right funding option",
"We help you choose between secured or unsecured education loans",
"We coordinate with leading banks and institutions for timely disbursal",
"End-to-end loan documentation, processing, and disbursal support",
              ]
              
            },
            {
              city: "Why Choose Nihal Finserv for Educational Funding?",
              
              points: [
    "Access to multiple banks & NBFCs under one roof",
"Personalized assistance from application to sanction",
"Loan options with low interest and zero hidden charges",
"100% confidentiality and professional service",
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

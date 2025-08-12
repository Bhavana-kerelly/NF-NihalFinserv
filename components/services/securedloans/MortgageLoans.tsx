"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business owners looking to raise capital",
"Salaried individuals needing large personal funds",
"Families planning higher education or destination weddings",
"Entrepreneurs managing operational cash flow",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/M1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Leverage Your Property to Unlock Financial Opportunities
          </h2>
          <p className="text-base mb-6">
            At Nihal Finserv, we understand that your property is not just a place—it's an asset that can power your ambitions. Our Mortgaged Loan solutions (Loan Against Property) allow you to unlock the value of your residential, commercial, or industrial property to secure substantial funding for your personal or business needs.
          </p>
          
          <p className="text-base">
            Whether you're looking to expand your business, manage high-cost medical expenses, fund your child’s education, or consolidate existing debts, our Loan Against Property (LAP) options provide you with the flexibility and financial freedom you need.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Images/Mortgage.png" // make sure to place the image in /public folder
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
              What is a Mortgaged Loan?
            </h2>
            <p>
              A mortgaged loan, also known as a loan against property, is a type of secured loan where you pledge your immovable asset—such as a house, land, or commercial space—as collateral to avail a loan. While the lender holds the lien on the property, you continue to retain ownership and can use the funds as per your requirements.
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
                  <h3 className="text-2xl font-semibold mb-2">High Loan Amounts</h3>
                  <p className="text-gray-400">
                    Avail up to 70% of the market value of your property for a wide range of financial needs.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Attractive Interest Rates</h3>
                  <p className="text-gray-400">
                    We help you connect with top banks and NBFCs offering competitive interest rates to make your EMIs affordable.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Repayment Tenure</h3>
                  <p className="text-gray-400">
                    Choose repayment plans ranging from 5 to 15 years, tailored to your cash flow and comfort.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Minimum Documentation</h3>
                  <p className="text-gray-400">
                    Enjoy a hassle-free loan process with easy paperwork and doorstep assistance.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Use Funds for Any Purpose</h3>
                  <p className="text-gray-400">
                    Funds can be used for business expansion, debt consolidation, education, medical emergencies, or even weddings—no usage restriction.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Loan Top-Up Facility</h3>
                  <p className="text-gray-400">
                    Already have a mortgage loan? We can help you refinance or top-up with better terms.
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
            Ideal For
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
            src="/images/Document1.jpg" // Place this in /public
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
          Mortgage Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Let your property work for you. At Nihal Finserv, we bridge your financial needs with the most trusted lenders, ensuring speed, transparency, and expert guidance throughout your loan journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Eligibility Criteria",
              points: [
    "Salaried professionals, self-employed individuals, business owners, and companies",
    "Applicant must own a residential, commercial, or industrial property",
    "Minimum age: 21 years | Maximum age: 65 years at loan maturity",
    "Stable income and clean credit history",
  ],
            },
            {
              city: "How Nihal Finserv Helps You",
              points: [
    "We analyze your profile and property type to suggest the best mortgage options",
"We negotiate on your behalf with top lenders for better rates and faster approvals",
"We assist you in valuation reports, legal verification, and pre-sanction documentation",
"End-to-end support until the loan is disbursed—and beyond",
  ],
            },
            {
              city: "Required Documents: For Individual",
              text:  "For Individuals:",
              points: [
    "Identity & address proof (Aadhaar, PAN, Passport, etc.)",
"Property documents (Title deed, Sale deed, EC, Tax receipts)",
"Income proof (Salary slips, IT returns, Bank statements)",
  ],
            },
            {
              city: "For Business Owners",
              
              points: [
    "Company financials",
"GST returns",
"Business registration/license",
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

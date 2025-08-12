"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Mortgage Loans", link: "/services/structuredproducts/mortgageloans" },
    { name: "School and College Funding", link: "/services/structuredproducts/schoolandcollegefunding" },
    { name: "Car Loans New and Refinancing", link: "/services/structuredproducts/carloansnerandfinancing" },
    { name: "OD/CC", link: "/services/structuredproducts/odcc" },
    { name: "Home Loans", link: "/services/structuredproducts/homeloans" },
    
  ];

const steps = [
  "ID & Address Proof (Aadhar, PAN)",
"Income Proof (ITR, Salary Slips, Bank Statements)",
"Property or Collateral Documents",
"Business Financials (for business loans)",
"Existing Loan Statements (if any)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/SEC1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Leverage Your Assets. Empower Your Goals.
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we believe that your assets should work for you. Whether you’re a business owner looking for expansion capital, a professional planning a major investment, or an individual aiming to consolidate debt or fund a dream, our Secured Loan solutions give you the financial strength you need — with minimal risk and maximum value.
          </p>
          
          <p className="text-base">
           Backed by your tangible assets, secured loans allow you to access higher loan amounts, better interest rates, and longer repayment tenures, ensuring a smooth and stress-free borrowing experience.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/Images/SEC2.jpg" // make sure to place the image in /public folder
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
              What Are Secured Loans?
            </h2>
            <p>
              A Secured Loan is a type of loan where you pledge an asset—such as real estate, gold, or fixed deposits—as collateral. The collateral acts as security for the lender, lowering their risk and enabling you to get more favorable loan terms compared to unsecured loans.
            </p>
            <p>With secured loans, you don’t need to compromise on liquidity. You retain ownership of your asset while utilizing its financial worth for your needs.</p>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Why Choose Nihal Finserv?
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
                <p className='text-gray-300 text-sm'>As an RBI-compliant financial consultancy and an authorized channel partner with top banks and NBFCs, Nihal Finserv brings credibility, transparency, and trust to your loan journey.</p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Trusted Industry Expertise</h3>
                  <p className="text-gray-400">
                    With deep market knowledge and financial acumen, we ensure you get the best-fit product aligned with your short and long-term financial goals.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Tailored Loan Solutions</h3>
                  <p className="text-gray-400">
                    No one-size-fits-all approach. Every loan is carefully structured to meet your needs — personal or professional.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Loan Against Fixed Deposits</h3>
                  <p className="text-gray-400">
                    Need cash flow but don’t want to break your FD? This is the solution for you. Continue to earn interest while enjoying credit benefits.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Transparent Processes</h3>
                  <p className="text-gray-400">
                    No hidden fees. No misleading terms. We maintain full transparency from start to finish.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Fast & Hassle-Free Service</h3>
                  <p className="text-gray-400">
                    From documentation to disbursal, our experts handle it all — so you can focus on what matters.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Network with Leading Lenders</h3>
                  <p className="text-gray-400">
                    We connect you to multiple lending institutions, ensuring the most competitive terms and rates.
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
            Documents Required
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
            src="/images/SEC3.jpg" // Place this in /public
            alt="Developer at work"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <section>
        <div className="bg-black text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">
        SECURED LOANS
      </h2>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border border-gray-600 rounded-md py-6 px-4 flex items-center justify-center hover:bg-gray-800 transition text-sm font-medium text-center"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
      </section>
    
 
    
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Secured Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          At Nihal Finserv, we’re more than loan facilitators—we’re your financial growth partners. Let us help you unlock the potential of your assets and achieve your ambitions with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Key Features and Benifits",
              points: [
    "Loan Amount: Ranges from ₹5 Lakhs to ₹10 Crores+",
"Flexible Tenure: Repayment periods up to 15 years",
"Low Interest Rates: Thanks to asset-backed security",
"Quick Approvals: Faster processing due to reduced risk",
"Custom Loan Structuring: Based on your goals and asset value",
"Minimal Documentation: We guide you through every step",
  ],
            },
            {
              city: "Who Can Apply?",
              points: [
    "Salaried Individuals",
"Self-Employed Professionals",
"Entrepreneurs and SMEs",
"Commercial Property Owners",
"High Net Worth Individuals",
  ],
            },
            {
              city: "Ready to apply?",
              text:  "Get in touch today for a free consultation and explore the secured loan options that best suit your needs.",
              
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

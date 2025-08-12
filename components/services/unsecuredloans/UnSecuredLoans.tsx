"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "Business Installment Loans", link: "/services/structuredproducts/businessinstallmentloans" },
    { name: "Medical Equipment Loans", link: "/services/structuredproducts/medicalequipmentloans" },
    { name: "Industrial Machinery Loans", link: "/services/structuredproducts/industrialmachineryloans" },
    { name: "Construction Equipment Loans", link: "/services/structuredproducts/constructionequipmentloans" },
    { name: "Equipment Refinancing Loans", link: "/services/structuredproducts/equipmentrefinancingloans" },
    { name: "Professional Loans", link: "/services/structuredproducts/professionalloans" },
    { name: "Personal Loans", link: "/services/structuredproducts/personalloans" },
    { name: "Educational Loans", link: "/services/structuredproducts/educationalloans" },
    
  ];

const steps = [
  "PAN Card & Aadhaar Card",
"Latest 3–6 Months Bank Statement",
"Salary Slips / ITR & Financials",
"Employment or Business Proof",
"Address Proof",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/U1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Unsecured Loans – Freedom Without Collateral<br/>
No Collateral? No Problem. Just Possibility..
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we understand that not everyone has property or assets to pledge—and that shouldn’t stop you from achieving your goals. Our Unsecured Loan solutions are tailored to provide fast, flexible, and collateral-free financing, empowering individuals and businesses to move forward without compromising ownership.
          </p>
          
          <p className="text-base">
           Whether it's funding a medical emergency, expanding your business, planning a wedding, or managing debt, our unsecured loans offer financial flexibility when you need it most.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/U2.jpg" // make sure to place the image in /public folder
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
              What Are Unsecured Loans?
            </h2>
            <p>
              Unsecured loans are personal or business loans disbursed based solely on your creditworthiness, income profile, and repayment history—no collateral or security required.
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
                <p className='text-gray-300 text-sm'>As an RBI-compliant financial consultancy and an authorized channel partner with top banks and NBFCs, Nihal Finserv brings credibility, transparency, and trust to your loan journey.</p>
                <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
                  <span className="text-red-500">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Loan Amounts up to ₹40 Lakhs</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Quick Disbursal within 48-72 Hours</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Minimal Documentation & 100% Digital Processing</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Flexible Tenures up to 5 Years</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> No Collateral or Guarantor Required</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Special Offers for Salaried, Self-Employed & Professionals</h3>
                  
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Zero Asset Risk – You retain full ownership of your properties</h3>
                  
                 
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
            src="/unstructured/U3.jpg" // Place this in /public
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
        UNSECURED LOANS
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
          Unsecured Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Your needs can't wait, and neither should your funding.<br/>
Let Nihal Finserv help you access the power of collateral-free financing—quickly, securely, and responsibly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Ideal For",
              points: [
    "Personal needs like medical expenses, travel, or home improvements",
"Business expansion or working capital needs",
"Education and overseas training",
"Debt consolidation or refinancing",
"Wedding and event expenses",
  ],
            },
            {
              city: "Eligibility Criteria: For Salaried Individuals",
              points: [
    "Age: 21–60 years",
"Minimum monthly income of ₹25,000",
"Minimum 6–12 months job stability",
"Clean credit history (CIBIL score above 700 preferred)",
  ],
            },
            {
              city: "For Self-Employed/Professionals:",
              points: [
    "Minimum 2 years of business continuity",
"Income proof & bank statements",
"Valid business registration/documents",
"Good repayment history",
  ],
              
            },
             {
              city: "Why Choose Nihal Finserv for Unsecured Loans?",
              points: [
    "Wide Network of Lenders & NBFCs",
"Credit Score-Based Customized Offers",
"One-on-One Consultation with Loan Experts",
"End-to-End Paperwork & Processing Support",
"Transparent Fee Structure & No Hidden Charges",
"Quick Turnaround Time – Funds in Your Account Fast",
  ],
              
            },
             {
              city: " Use Your Unsecured Loan Wisely:",
              points: [
    "Invest in your business",
"Cover emergency expenses",
"Fund higher education or travel",
"Upgrade your home or lifestyle",
"Consolidate multiple debts",
  ],
              
            },
            {
                city: "Customer Experience",
                text: "I needed a quick loan for my father's surgery but didn’t want to risk my property. Nihal Finserv made it easy—loan sanctioned in 2 days without asking for any collateral.",
            }
            
           
             
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

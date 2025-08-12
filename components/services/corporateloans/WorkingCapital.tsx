"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Cash Credit (CC)",
  "Overdraft Facility (OD)",
  "Short-Term Business Loan",
  "Invoice Discounting",
  "Trade Finance",
];


export default function SchoolAndCollegeFunding() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/coorporate/W1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
          Fuel Your Daily Operations — Seamlessly and Smartly
          </h2>
          <p className="text-base mb-6">
            Cash flow gaps shouldn't hold your business back. At Nihal Finserv, we offer fast, flexible Working Capital Loans designed to keep your operations running smoothly — whether it’s paying suppliers, managing inventory, or handling short-term expenses.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coorporate/W2.jpg"
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
              What is a Working Capital Loan?
            </h2>
            <p>
              A Working Capital Loan is a short-term financing solution that helps businesses cover everyday operational costs, manage seasonal demands, and keep the wheels turning even when cash inflows slow down.
            </p>
            <p>It’s not for buying long-term assets — it’s for day-to-day business continuity.</p>
            
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
                   ₹1 Lakh to ₹5 Crores+
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tenure</h3>
                  <p className="text-gray-400">
                   5 to 36 months
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Interest Rates</h3>
                  <p className="text-gray-400">
                    Competitive & customized
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Repayment Options</h3>
                  <p className="text-gray-400">
                   EMI / Bullet / Flexible
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Collateral</h3>
                  <p className="text-gray-400">
                   Secured & Unsecured Options
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Renewable Facility</h3>
                  <p className="text-gray-400">
                    Available for recurring needs
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
             Working Capital Products We Offer:
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
            src="/coorporate/W3.jpg"
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
          Working Capital
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          Apply now for a working capital loan tailored to your cash flow needs.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "ideal Use ",
              points: [
    "Purchasing raw materials or stock",
"Managing supplier payments",
"Handling payroll or utility bills",
"Bridging invoice payment cycles",
"Coping with seasonal demand spikes",
"Tackling unforeseen business costs",
  ],
            },
            {
              city: "Who Can Apply",
              points: [
    "Business Vintage	1 year+ in operations",
"Turnover	₹20 Lakhs+ annually",
"Documents	GST returns, ITRs, bank statements, KYC, balance sheets, etc.",
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
    "In-depth assessment of your cash flow cycles",
"Fast disbursal to meet urgent needs",
"Loan renewal and top-up facilities",
"Simple documentation and minimal paperwork",
"Multiple bank/NBFC partnerships for better rates",
  ],
},
            {
              city: " Client Review",
              
              text: "Our business often faces seasonal dips in cash flow. Nihal Finserv’s working capital loan kept our operations steady. Great service and fast approvals!",
              
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

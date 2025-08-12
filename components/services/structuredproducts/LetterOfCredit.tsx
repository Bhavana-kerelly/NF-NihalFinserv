"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "Import Letter of Credit – For Indian buyers sourcing goods internationally",
"Export Letter of Credit – For Indian sellers exporting goods globally",
"Standby LC – As a financial backup or performance guarantee",
"Revolving LC – For recurring or regular trade relationships",
"Transferable LC – For intermediary trading companies",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/structuredproducts/LOC1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Facilitate Global Trade with Confidence
          </h2>
          <p className="text-base mb-6">
          Expand your business across borders with the security of a Letter of Credit arranged by Nihal Finserv. We help you minimize risk in international trade by guaranteeing payments through trusted financial institutions — ensuring smooth transactions between buyers and sellers worldwide.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/structuredproducts/LOC2.jpg"
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
              What is a Letter of Credit?
            </h2>
            <p className="text-base mb-6" >A Letter of Credit (LC) is a bank-issued guarantee that assures a seller of receiving payment from the buyer, provided the agreed conditions and documentation are met. It’s a key instrument used in import-export trade to safeguard both parties.</p>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#132b4a] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Benifits
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
                  <h3 className="text-2xl font-semibold mb-2">Buyer Benefits</h3>
                  <p className="text-gray-400">
                    Builds credibility with overseas suppliers
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Delays cash outflow until shipment confirmation</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Strengthens negotiation position</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Mitigates legal and regulatory trade risks</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Seller Benefits</h3>
                  <p className="text-gray-400">
                    Ensures payment upon shipment
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Secures transaction from buyer default risk</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Enables financing and working capital release</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Expands global customer base with reduced risk</h3>
                  
                </div>

              </div>
            </div>
          </section>
        

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Types of LCs We Heil You With:
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
            src="/structuredproducts/LOC3.jpg"
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
          Letter of Credit
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
        From documentation to bank coordination — we help simplify the LC process so you can focus on growing globally.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Our LC Advisory Covers",
              points: [
    "LC issuance and structuring based on transaction needs",
"Coordination with buyer/seller banks",
"Document verification and compliance support",
"Risk mitigation for currency, political, and payment delays",
"End-to-end transaction management",
  ],
            },
            {
              city: "Ideal For:",
              points: [
    "Importers & Exporters",
"Manufacturers and Traders",
"SMEs and Corporates engaged in global trade",
"Freight Forwarders & Logistics Coordinators",
"Agri-Commodities, Engineering Goods, Textiles, Pharma & more",
  ],
            },
            
            
           
            {
              city: "Example",
              
              text: "An Indian electronics importer needs assurance before releasing payment to a European supplier. Nihal Finserv arranges an Import LC through a top Indian bank, securing the supplier’s payment only upon proof of goods shipped — creating a trust bridge between the two parties.",
              
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

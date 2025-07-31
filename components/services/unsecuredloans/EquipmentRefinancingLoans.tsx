"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Equipment Ownership Documents / RC",
  "Invoices & Proof of Purchase",
  "KYC of Business/Owner",
  "Bank Statements (6–12 months)",
  "ITR & Financials (2 years)",
  "Asset Photographs",
  "Existing Loan Statements (if refinancing)"
];


export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6  bg-black text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/office-full.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
           Turn Your Owned Machinery Into Working Capital Without Selling It.
          </h2>
          <p className="text-base mb-6">
          Running a business in construction, manufacturing, logistics, or infrastructure? Already own high-value equipment? Then don’t let it sit idle financially. With Equipment Refinancing Loans from Nihal Finserv, you can unlock the hidden value of your existing machinery to fund growth, manage working capital, or expand operations — without selling or replacing your equipment.
          </p>
          
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/team-photo.png" // make sure to place the image in /public folder
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
           What is Equipment Refinancing?
            </h2>
            <p>
            Equipment refinancing is a secured loan provided against equipment or machinery you already own. Instead of taking a fresh loan or selling assets, you use your fully or partially paid-off equipment as collateral and receive a lump-sum loan based on its current market value.
            </p>
            <p>It’s an excellent way to generate liquidity, reduce financial stress, or even refinance high-interest loans.</p>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#1C1C1C] text-white px-8 py-16">
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
                  <h3 className="text-2xl font-semibold mb-2">Loan Against Fully or Partially Paid Equipment</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Up to 80% of Resale Value as Loan Amount</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Tenure Options from 12 to 60 Months</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Lower Interest Rates Compared to Unsecured Loans</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Option to Refinance Equipment Already Financed (Takeover Facility)</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">  Funding Available for Construction, Industrial, Medical & Commercial Equipment</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Asset Valuation Support by Certified Professionals</h3>
                  
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
            src="/woman-laptop.png" // Place this in /public
            alt="Developer at work"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    
    <IndustriesWeServe />
   
    
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-gray-900 text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Top Cities in India Leading the Demand for Web Development Services
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          With businesses shifting online across every industry, the need for professional web development services is
          at an all-time high. From corporate websites and e-commerce platforms to SaaS products and enterprise
          portals, Indian cities are powering this digital transformation with world-class web design and development
          expertise. Below, we spotlight the top cities driving demand and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Bengaluru",
              text:
                "Web Development Services in Bengaluru thrive on the city's robust IT ecosystem and startup culture. Bengaluru developers specialize in SaaS product development, enterprise-grade portals, and modern frameworks like React, Angular, and Node.js. Their focus on innovation, scalability, and cloud-native architecture makes them ideal for fast-growing startups and global enterprises.",
            },
            {
              city: "Mumbai",
              text:
                "Web Development Services in Mumbai serve industries ranging from finance and media to retail and healthcare. Developers here excel at building responsive corporate websites, e-commerce solutions with payment integration, and custom CMS platforms. With a strong corporate presence, Mumbai ensures compliance, user-centric design, and robust performance.",
            },
            {
              city: "Delhi",
              text:
                "Web Development Services in Delhi cater to government projects, startups, and enterprises alike. Delhi-based developers are skilled in multilingual sites, e-governance platforms, and digital-first solutions with strong SEO and marketing integration. The city's expertise also extends to building educational portals and large-scale web applications.",
            },
            {
              city: "Chennai",
              text:
                "Web Development Services in Chennai focus on backend reliability, ERP integrations, and enterprise systems. Developers in Chennai are trusted for their expertise in Java, .NET, and PHP frameworks, delivering high-performance web applications for corporates, manufacturing, and logistics industries.",
            },
            {
              city: "Hyderabad",
              text:
                "Web Development Services in Hyderabad combine UI/UX excellence with cutting-edge backend development. Hyderabad teams build SaaS dashboards, scalable e-commerce platforms, and secure fintech portals. With expertise in AI, APIs, and cybersecurity, they cater to global clients requiring robust, enterprise-ready web solutions.",
            },
            {
              city: "Pune",
              text:
                "Web Development Services in Pune provide cost-effective yet high-quality solutions for startups, SMEs, and enterprises. Pune developers excel at MVPs, business websites, and cross-platform applications. Their strength lies in balancing affordability with innovation, making them a go-to hub for emerging businesses.",
            },
          ].map(({ city, text }) => (
            <div key={city} className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
              <p className="text-gray-300 leading-relaxed">{text}</p>
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

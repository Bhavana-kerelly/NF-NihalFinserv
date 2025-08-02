"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
 "Property documents (Title deed, tax receipts, plan approvals)",
"KYC – Aadhaar, PAN, Address Proof",
"Income Proof (ITR, salary slips, bank statements)",
"Existing loan documents (if any)",
];


export default function MortgageLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-black text-white flex flex-col md:flex-row items-center gap-10">
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
            Unlock the Potential of Your Property Without Selling It
          </h2>
          <p className="text-base mb-6">
          Your property holds more than just space — it holds value. With Loan Against Property, you can tap into that value to fund business needs, education, emergencies, or expansion. At Nihal Finserv, we help you get the most out of your residential or commercial property through customized LAP solutions with competitive rates and flexible repayment terms.
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
               What is Loan Against Property?
            </h2>
            <p className="text-base mb-6" >Loan Against Property (LAP) is a secured loan offered by banks or NBFCs where your residential, commercial, or industrial property is pledged as collateral. The loan amount is based on the property’s market value and your repayment capability.</p>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#1C1C1C] text-white px-8 py-16">
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
                  <h3 className="text-2xl font-semibold mb-2"> Lower Interest Rates compared to personal loans</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Longer Tenure (up to 15 years) for easy EMIs</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Strengthens negotiation position</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> High Loan Amounts (Up to 70% of property value)</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Use Funds Freely – business, education, medical, personal needs</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Continue Using the Property – No need to vacate or sell</h3>
                  
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

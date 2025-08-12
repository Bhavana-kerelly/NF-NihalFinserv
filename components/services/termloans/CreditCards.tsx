"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import IndustriesWeServe from '@/components/Industries';


import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Shopping Cards",
  "Travel Cards",
  "Business Credit Cards",
  "Salaried Professional Cards",
  "Premium Cards",
  "Fuel Cards"
];


export default function SchoolAndCollegeFunding() {
  return (
    <>
      <section className="py-20 px-6  bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/termloans/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
          Swipe Smart. Earn More. Enjoy Financial Freedom.
          </h2>
          <p className="text-base mb-6">
           At Nihal Finserv, we simplify the way you spend, earn, and manage your finances with access to top-tier credit cards tailored to your lifestyle. Whether you’re a frequent traveller, business owner, salaried professional, or shopper — we match you with the perfect card based on your income, credit profile, and financial goals.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/termloans/C2.jpg" // make sure to place the image in /public folder
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
              What is a Credit Card?
            </h2>
            <p>
              A Credit Card allows you to make purchases now and pay later within a credit limit. It offers unmatched convenience, reward points, cashback, and EMI options, helping you manage everyday expenses or emergencies — while building your credit history.
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
                  <h3 className="text-2xl font-semibold mb-2"> Credit Limit</h3>
                  <p className="text-gray-400">
                   25000 to 10 Lakhs+
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Grace Period</h3>
                  <p className="text-gray-400">
                   Up to 50 days interest-free
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Rewards & Offers</h3>
                  <p className="text-gray-400">
                    Cashback, miles, discounts
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2"> Add-On Cards</h3>
                  <p className="text-gray-400">
                   For family or employees
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Convert to EMIs</h3>
                  <p className="text-gray-400">
                   On large purchases
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Smart App Tracking</h3>
                  <p className="text-gray-400">
                     View spends & manage card anytime
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
             Types of Credit Cards We Offer
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Your card, your lifestyle — made better with Nihal Finserv.

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
            src="/termloans/C3.jpg" // Place this in /public
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
          Credit Card Loans
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
         Your card, your lifestyle — made better with Nihal Finserv. <br/>
Let us help you swipe smarter and save more!

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Benifits of Getting Your Card via Nihal Finserv",
              points: [
    "Compare cards from multiple top banks & NBFCs",
"Fast online/offline application assistance",
"Pre-screening based on your eligibility",
"Guidance on approval, limits, and usage",
"End-to-end documentation support",
"Improve your credit score with timely usage",
  ],
            },
            {
              city: "Eligibility Criteria",
              points: [
    "Age	21 to 60 years",
"Employment	Salaried or self-employed",
"CIBIL Score	700+ preferred",
"Income	₹15,000/month or more",
"Documents	PAN, Aadhaar, income proof, bank statements",
  ],
            },
            {
              city: " Special Offers Available",
              points: [
    "Welcome gifts worth ₹2,000–₹10,000",
"Annual fee waiver on first-year usage",
"Zero lost card liability & fraud protection",
"Fuel surcharge waiver",
"Discounts on groceries, fashion, travel, and more",
  ],
             
            },
            {
              city: "How to Apply",
              points: [
    "1.Connect with our card advisor",
"2.Choose the right card based on your needs",
"3.Get approved and start spending smarter",
  ],
},
            {
              city: "Responsible Credit Usage Tips",
              points: [
    "Pay full amount before due date",
"Use <30% of credit limit to maintain credit score",
"Set auto-pay or reminders to avoid late fees",
"Redeem points regularly before they expire",
  ],
},
            {
              city: " Client Testimonial",
              
              text: "“Nihal Finserv helped me choose a credit card with 5X points on travel and ₹5000 worth of joining benefits. Their team made the entire process seamless!",
              
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

import React from 'react';

export default function SoftwareOutsourcing() {
  return (
    <div className="bg-black text-white flex items-center justify-center pt-15 pb-15 pl-10 pr-5">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Wide Range Of Loan Options With Your Trusted Financial Consultant
            </h1>
            
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              Explore a wide range of loan solutions tailored to your needs — from personal and business loans to home and vehicle financing.
As your trusted financial consultant, we simplify the process, offer expert guidance, and connect you with the best options in the market.
Whether you're planning, expanding, or investing — we’re here to make it happen, seamlessly.
            </p>
          </div>
          
          {/* Right side - Statistics */}
          <div className="grid grid-cols-2 gap-8">
            {/* Years of Excellence */}
            <div className="text-left">
              <div className="text-5xl lg:text-6xl font-bold mb-2">100K</div>
              <div className="text-gray-400 text-lg">Loans Dispersed</div>
            </div>
            
            {/* Happy Clients */}
            <div className="text-left">
              <div className="text-5xl lg:text-6xl font-bold mb-2">100,000+</div>
              <div className="text-gray-400 text-lg">Customers</div>
            </div>
            
            {/* Expert Team */}
            <div className="text-left">
              <div className="text-5xl lg:text-6xl font-bold mb-2">10+</div>
              <div className="text-gray-400 text-lg">Cities Served</div>
            </div>
            
            {/* Client Retention */}
            <div className="text-left">
              <div className="text-6xl lg:text-7xl font-bold mb-2">75+</div>
              <div className="text-gray-400 text-lg">Associated with Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
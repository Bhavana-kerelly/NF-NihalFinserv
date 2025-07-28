import React from 'react';

export default function SoftwareOutsourcing() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Software Engineering,
              <br />
              <span className="text-gray-300">Consulting & Outsourcing</span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              We are an award-winning and Top Web Development Company specializing in 
              outsourced software development and dedicated engineering teams for clients worldwide
            </p>
          </div>
          
          {/* Right side - Statistics */}
          <div className="grid grid-cols-2 gap-8">
            {/* Years of Excellence */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold mb-2">16+</div>
              <div className="text-gray-400 text-lg">Years of Excellence</div>
            </div>
            
            {/* Happy Clients */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold mb-2">3000+</div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>
            
            {/* Expert Team */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold mb-2">500+</div>
              <div className="text-gray-400 text-lg">Expert Team</div>
            </div>
            
            {/* Client Retention */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold mb-2">99%</div>
              <div className="text-gray-400 text-lg">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
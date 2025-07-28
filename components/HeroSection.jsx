"use client"; // <--- Add this at the very top of your Hero.jsx file

import React from 'react';
import GlobeAnimation from './GlobeAnimation'; // Import your new GlobeAnimation component

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between min-h-[700px]"> {/* Added min-h for consistent height */}
      <div className="max-w-xl text-center md:text-left"> {/* Added text alignment for responsiveness */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Building Applications<br />that Drive Success<br />with Precision
        </h1>
        <p className="text-lg mb-8 text-gray-300"> {/* Added text-gray-300 for slightly muted text */}
          With 16 years of industry expertise and a dedicated team of over 500 professionals, OZRIT specializes in developing AI-driven Web and Mobile applications that drive business success.
        </p>
        <div className="flex gap-8 text-xl justify-center md:justify-start"> {/* Adjusted for center alignment on small screens */}
          <div>
            <strong>2.5k+</strong><br />
            <span className="text-sm text-gray-400">Projects</span>
          </div>
          <div>
            <strong>3K+</strong><br />
            <span className="text-sm text-gray-400">Clients</span>
          </div>
          <div>
            <strong>4.9</strong><br />
            <span className="text-sm text-gray-400">User Rating</span>
          </div>
        </div>
      </div>
      {/* Container for the globe animation */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 lg:w-2/5 aspect-square max-w-[500px] flex items-center justify-center">
        {/*
          The aspect-square and max-w classes help control the globe container size.
          The Canvas component inside GlobeAnimation will fill this div.
        */}
        <GlobeAnimation />
      </div>
    </section>
  );
}
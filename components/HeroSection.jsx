"use client";

import React, { Fragment } from 'react';
import { FaHandHoldingUsd, FaFileAlt, FaGlobeAmericas } from 'react-icons/fa';
import GlobeAnimation from './GlobeAnimation';

export default function HeroSection() {
  const features = [
    {
      icon: <FaHandHoldingUsd size={40} className="text-white" />,
      title: (
        <>
        Very Low Rates<br/>on All Loans
        </>
      ),
    },
    {
      icon: <FaFileAlt size={40} className="text-white" />,
      title: '99.9% Success Rate Guarantee',
    },
    {
      icon: <FaGlobeAmericas size={40} className="text-white" />,
      title: 'Flexible with Your Repayments',
    },
  ];

  return (
    <section className="bg-[#132b4a] text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between min-h-[400px]">
      {/* Text Block */}
      <div className="max-w-xl text-center md:text-left md:ml-10">
        <h1 className="text-4xl font-bold leading-tight mb-6 text-balance">
          Plan For Tomorrow<br />and Choose the<br />Right Loan
        </h1>
        <p className="text-sm mb-5 text-gray-400">
          At Nihal Finserv, we make borrowing simple and stress-free. Whether you need a personal loan, home loan, car loan, or help choosing the right investment, we’re here to guide you.
        </p>
        <p className="text-sm mb-6 text-gray-400">
          We work closely with trusted banks and NBFCs to help you find the best financial solutions — quickly, transparently, and with personal attention.
        </p>
        <p className="text-xl mb-7 text-gray-300">
          Your goals matter. Let’s finance them, together.
        </p>

        {/* Features Block */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 bg-[#132b4a] py-10 px-4 rounded-lg">
          {features.map((feature, index) => (
            <Fragment key={index}>
              <div className="flex items-center text-white max-w-sm gap-4">
                <div>{feature.icon}</div>
                <p className="text-sm">{feature.title}</p>
              </div>

              {/* Divider */}
              {index < features.length - 1 && (
                <>
                  <div className="hidden md:block h-10 border-l border-gray-700 mx-4" />
                  <div className="block md:hidden w-full border-t border-gray-700 my-4" />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Globe Animation */}
      <div className="mt-10 mr-10 md:mt-0 w-full md:w-1/2 lg:w-2/5 aspect-square max-w-[500px] flex items-center justify-center">
        <GlobeAnimation />
      </div>
    </section>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full flex justify-between items-center p-4 shadow font-serif">
      {/* Logo */}
      <div className="font-bold">
        <Image
  src="/Logo.png"
  alt="Nihal Finserv"
  width={100}
  height={32}
  className="h-18 w-auto"
/>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-lg relative">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>

        {/* Services Dropdown */}
        <div
  className="relative font-serif"
  onMouseEnter={() => toggleMenu("services")}
  onMouseLeave={() => toggleMenu(null)}
>
  <span className="cursor-pointer">Services ▾</span>

  {openMenu === "services" && (
    <div className="fixed top-[64px] left-0 right-0 bg-black shadow-lg z-50 border-t border-gray-200 font-serif">
      <div className="grid grid-cols-4 gap-6 max-w-[1280px] mx-auto p-8">
        {/* 1st column: Heading spanning 9 rows */}
        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-1xl text-white"><a href="#" className="hover:text-blue-600 font-serif">Software Development</a></div>
          <div className="text-white text-sm mb-48" ><a href="#" className="hover:text-blue-600">Website Development</a><br/>
          <a href="#" className="hover:text-blue-600 font-serif">Mobile App Development</a><br/>
          <a href="#" className="hover:text-blue-600">Application Development</a><br/>
          <a href="#" className="hover:text-blue-600">Blockchain Development</a><br/>
          <a href="#" className="hover:text-blue-600">Custom Software</a><br/>
          <a href="#" className="hover:text-blue-600">E-commerce</a><br/>
          <a href="#" className="hover:text-blue-600">Testing & QA</a><br/>
          <a href="#" className="hover:text-blue-600">AI & ML</a><br/>
          </div>
        </div>

        {/* 2nd column: 5 rows */}
        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-1xl text-white"><a href="#" className="hover:text-blue-600">Design & Digital</a></div>
          <div className="text-white text-sm mb-48"><a href="#" className="hover:text-blue-600">UI/UX</a><br/>
          <a href="#" className="hover:text-blue-600">CX/DX</a><br/>
          <a href="#" className="hover:text-blue-600">Websites</a><br/>
          <a href="#" className="hover:text-blue-600">Frontend Engineering</a></div>
        </div>

        {/* 3rd column: 7 rows */}
        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-1xl text-white"><a href="#" className="hover:text-blue-600">AI & ML</a></div>
          <div className="text-white text-sm mb-48"><a href="#" className="hover:text-blue-600">AI Development</a>
          <a href="#" className="hover:text-blue-600">ML Development</a><br/>
          <a href="#" className="hover:text-blue-600">ChatGPT Solutions</a><br/>
          <a href="#" className="hover:text-blue-600">AI Chatbot Development</a><br/>
          <a href="#" className="hover:text-blue-600">Large Language Model</a><br/>
          <a href="#" className="hover:text-blue-600">Generative AI</a></div>
        </div>

        {/* 4th column: 8 rows */}
        <div className="flex flex-col space-y-2 ">
          <div className="font-semibold text-1xl text-white"><a href="#" className="hover:text-white">Digital & Branding</a></div>
          <div className="text-white text-sm mb-48 "><a href="#" className="hover:text-white">Digital marketing</a><br/>
          <a href="#" className="hover:text-blue-600">SEO</a><br/>
          <a href="#" className="hover:text-blue-600">Pay-Per-Click Advertising</a><br/>
          <a href="#" className="hover:text-blue-600">Content Marketing</a><br/>
          <a href="#" className="hover:text-blue-600">Email Marketing</a><br/>
          <a href="#" className="hover:text-blue-600">Influencer Partnerships</a><br/>
          <a href="#" className="hover:text-blue-600">Social Media Marketing</a></div>
        </div>
      </div>
    </div>
  )}
</div>
        {/* Industries Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("industries")}
          onMouseLeave={() => toggleMenu(null)}
        >
          <span className="cursor-pointer">Industries ▾</span>
          {openMenu === "industries" && (
            <div className="absolute top-full bg-white shadow p-4 rounded text-sm z-10 text-gray-800 space-y-1">
              <Link href="#" className="block hover:text-blue-600">Healthcare</Link>
              <Link href="#" className="block hover:text-blue-600">Finance</Link>
              <Link href="#" className="block hover:text-blue-600">Education</Link>
              <Link href="#" className="block hover:text-blue-600">Retail</Link>
              <Link href="#" className="block hover:text-blue-600">Manufacturing</Link>
              <Link href="#" className="block hover:text-blue-600">Logistics</Link>
              <Link href="#" className="block hover:text-blue-600">Hospitality</Link>
              <Link href="#" className="block hover:text-blue-600">Real Estate</Link>
              <Link href="#" className="block hover:text-blue-600">Entertainment</Link>
            </div>
          )}
        </div>

        <Link href="/insights">Insights</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact Us</Link>

        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Hire Us →
        </button>
      </nav>
    </header>
  );
}

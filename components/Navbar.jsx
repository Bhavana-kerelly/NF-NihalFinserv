"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full flex justify-between items-center p-4 shadow">
      {/* Logo */}
      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-serif">
        OZRIT<span className="text-black text-sm align-super">™</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-lg relative font-serif">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>

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
        <div className="flex flex-col space-y-2 font-serif text-blue-50">
          <div className="font-semibold text-1xl text-white"><a href="#" className="hover:text-blue-600">Design & Digital</a></div>
          <a href="#" className="hover:text-blue-600">UI/UX</a>
          <a href="#" className="hover:text-blue-600">CX/DX</a>
          <a href="#" className="hover:text-blue-600">Websites</a>
          <a href="#" className="hover:text-blue-600">Frontend Engineering</a>
        </div>

        {/* 3rd column: 7 rows */}
        <div className="flex flex-col space-y-2 font-serif text-blue-50">
          <a href="#" className="hover:text-blue-600">AI & ML</a>
          <a href="#" className="hover:text-blue-600">AI Development</a>
          <a href="#" className="hover:text-blue-600">ML Development</a>
          <a href="#" className="hover:text-blue-600">ChatGPT Solutions</a>
          <a href="#" className="hover:text-blue-600">AI Chatbot Development</a>
          <a href="#" className="hover:text-blue-600">Large Language Model</a>
          <a href="#" className="hover:text-blue-600">Generative AI</a>
        </div>

        {/* 4th column: 8 rows */}
        <div className="flex flex-col space-y-2 font-serif text-blue-50">
          <a href="#" className="hover:text-white">Digital & Branding</a>
          <a href="#" className="hover:text-white">Digital marketing</a>
          <a href="#" className="hover:text-blue-600">SEO</a>
          <a href="#" className="hover:text-blue-600">Pay-Per-Click Advertising</a>
          <a href="#" className="hover:text-blue-600">Content Marketing</a>
          <a href="#" className="hover:text-blue-600">Email Marketing</a>
          <a href="#" className="hover:text-blue-600">Influencer Partnerships</a>
          <a href="#" className="hover:text-blue-600">Social Media Marketing</a>
        </div>
      </div>
    </div>
  )}
</div>



        {/* Industries Dropdown */}
        <div
          className="relative font-serif"
          onMouseEnter={() => toggleMenu("industries")}
          onMouseLeave={() => toggleMenu(null)}
        >
          <span className="cursor-pointer">Industries ▾</span>
          {openMenu === "industries" && (
            <div className="absolute top-full bg-white shadow p-2 rounded text-sm z-10">
              <Link href="#">Healthcare</Link><br />
              <Link href="#">Finance</Link><br />
              <Link href="#">Education</Link><br />
              <Link href="#">Retail</Link><br />
              <Link href="#">Manufacturing</Link><br />
              <Link href="#">Logistics</Link><br />
              <Link href="#">Hospitality</Link><br />
              <Link href="#">Real Estate</Link><br />
              <Link href="#">Entertainment</Link><br />
            </div>
          )}
        </div>

        <Link href="/insights">Insights</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact Us</Link>

        <button className="bg-black text-white px-4 py-2 rounded">
          Hire Us →
        </button>
      </nav>
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full shadow font-serif bg-[#0F2D54] text-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="font-bold flex-shrink-0">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Nihal Finserv"
              width={140}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-10 text-lg items-center relative">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => toggleMenu("services")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Services ▾
            </span>
            {openMenu === "services" && (
              <div className="fixed top-[64px] left-0 right-0 bg-black shadow-lg z-50 border-t border-gray-200">
                <div className="grid grid-cols-4 gap-6 max-w-[1280px] mx-auto px-8 py-8 text-white text-sm">
                  
                  {/* Secured Loans Column */}
                  <div className="flex flex-col space-y-2">
                    <div className="font-semibold">
                      <Link href="/services/securedloans/securedloans" className="hover:text-blue-600">Secured Loans</Link>
                    </div>
                    <Link href="/services/securedloans/mortgageloans" className="hover:text-blue-600">Mortgage Loans</Link>
                    <Link href="/services/securedloans/schoolandcollegefunding" className="hover:text-blue-600">School & College Funding</Link>
                    <Link href="/services/securedloans/carloansnerandfinancing" className="hover:text-blue-600">Car Loans Ner & Refinancing</Link>
                    <Link href="/services/securedloans/odcc" className="hover:text-blue-600">OD/CC</Link>
                    <Link href="/services/securedloans/homeloans" className="hover:text-blue-600">Home Loans</Link>
                  </div>

                  {/* Unsecured Loans Column */}
                  <div className="flex flex-col space-y-2">
                    <div className="font-semibold">
                      <Link href="/services/unsecuredloans/unsecuredLoans" className="hover:text-blue-600">Unsecured Loans</Link>
                    </div>
                    <Link href="/services/unsecuredloans/businessinstallmentloans" className="hover:text-blue-600">Business Installment Loans</Link>
                    <Link href="/services/unsecuredloans/medicalequipmentloans" className="hover:text-blue-600">Medical Equipment Loans</Link>
                    <Link href="/services/unsecuredloans/industrialmachineryloans" className="hover:text-blue-600">Industrial Machinery Loans</Link>
                    <Link href="/services/unsecuredloans/constructionequipmentloans" className="hover:text-blue-600">Construction Equipment Loans</Link>
                    <Link href="/services/unsecuredloans/equipmentrefinancingloans" className="hover:text-blue-600">Equipment Refinancing Loans</Link>
                    <Link href="/services/unsecuredloans/professionalloans" className="hover:text-blue-600">Professional Loans</Link>
                    <Link href="/services/unsecuredloans/personalloans" className="hover:text-blue-600">Personal Loans</Link>
                    <Link href="/services/unsecuredloans/educationalloans" className="hover:text-blue-600">Educational Loans</Link>
                  </div>

                  {/* Term Loans Column */}
                  <div className="flex flex-col space-y-2">
                    <div className="font-semibold">
                      <Link href="/services/termloans/term" className="hover:text-blue-600">Term Loans</Link>
                    </div>
                    <Link href="/services/termloans/shorttermloans" className="hover:text-blue-600">Short-Term Loans</Link>
                    <Link href="/services/termloans/longtermloans" className="hover:text-blue-600">Long-Term Loans</Link>
                    <Link href="/services/termloans/creditcards" className="hover:text-blue-600">Credit Cards</Link>
                  </div>

                  {/* Corporate Loans Column */}
                  <div className="flex flex-col space-y-2">
                    <div className="font-semibold">
                      <Link href="/services/coorporateloans/coorporateloans" className="hover:text-blue-600">Corporate Loans</Link>
                    </div>
                    <Link href="/services/corporateloans/workingcapital" className="hover:text-blue-600">Working Capital</Link>
                    <Link href="/services/corporateloans/assetfinance" className="hover:text-blue-600">Asset Finance</Link>
                    <Link href="/services/corporateloans/leasing" className="hover:text-blue-600">Leasing</Link>
                    <Link href="/services/corporateloans/termloans" className="hover:text-blue-600">Term Loans</Link>
                    <Link href="/services/corporateloans/structuredfinance" className="hover:text-blue-600">Structured Finance</Link>
                  </div>
                   {/* Bottom Row (4 Columns) */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/services/sme/sme" className="hover:text-blue-600">SME</Link></div>
        <div className="text-white text-sm space-y-1">
          <Link href="/services/sme/manufacturer" className="hover:text-blue-600">Manufacturer</Link><br />
          <Link href="/services/sme/distributor" className="hover:text-blue-600">Distributor</Link><br/>
          <Link href="/services/sme/retailer" className="hover:text-blue-600">Retailer</Link><br/>
          <Link href="/services/sme/serviceprovider" className="hover:text-blue-600">Service Provider</Link><br />
          <Link href="/services/sme/vendor" className="hover:text-blue-600">Vendor</Link>
        </div>
      </div>

<div className="flex flex-col space-y-2">
  <div className="font-semibold text-white"><Link href="/services/structuredproducts/structuredproducts" className="hover:text-blue-600">Structured Products</Link></div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/structuredproducts/loanagainstsecurities" className="hover:text-blue-600">Loan Against Securities</Link><br />
    <Link href="/services/structuredproducts/structuredinvestments" className="hover:text-blue-600">Structured Investments</Link><br/>
    
    <Link href="/services/structuredproducts/letterofcredit" className="hover:text-blue-600">Letter Of Credit</Link><br/>
    <Link href="/services/structuredproducts/leaserentaldiscounting" className="hover:text-blue-600">Lease Rental Discounting</Link><br />
    <Link href="/services/structuredproducts/loanagainstproperty" className="hover:text-blue-600">Loan Against Property</Link>
  </div>
</div>

<div className="flex flex-col space-y-2">
  <div className="font-semibold text-white"><Link href="/services/equipmentfinancingandleasing/equipmentfinancingandleasing" className="hover:text-blue-600">Equipment Financing & Leasing</Link></div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/equipmentfinancingandleasing/capitalgoods" className="hover:text-blue-600">Capital Goods</Link><br />
    <Link href="/services/equipmentfinancingandleasing/ithardware" className="hover:text-blue-600">IT Hardware</Link><br/>
    <Link href="/services/equipmentfinancingandleasing/officeinfrastructure" className="hover:text-blue-600">Office Infrastructure</Link><br />
    <Link href="/services/equipmentfinancingandleasing/cars" className="hover:text-blue-600">Cars</Link><br/>
    <Link href="/services/equipmentfinancingandleasing/constructionequipment" className="hover:text-blue-600">Construction Equipment</Link><br />
    <Link href="/services/equipmentfinancingandleasing/energysavingequipment" className="hover:text-blue-600">Energy Saving Equipment</Link><br/>
    <Link href="/services/equipmentfinancingandleasing/healthcareequipment" className="hover:text-blue-600">Healthcare Equipment</Link><br />
    <Link href="/services/equipmentfinancingandleasing/logisticsmachinery" className="hover:text-blue-600">Logistics Machinery</Link><br/>
    <Link href="/services/equipmentfinancingandleasing/solarequipment" className="hover:text-blue-600">Solar Equipment</Link>
  </div>
</div>

<div className="flex flex-col space-y-2">
  <div className="font-semibold text-white"><Link href="/services/aichatbots/aichatbots" className="hover:text-blue-600">AI Chatbots</Link></div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/aichatbots/chatgptsolutions" className="hover:text-blue-600">ChatGPT Solutions</Link><br />
    <Link href="/services/aichatbots/aichatbotdev" className="hover:text-blue-600">AI Chatbot Dev</Link>
  </div>
</div>
    </div>
  </div>
)}
</div>
        {/* Industries Dropdown
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
        </div> */}

                  {/* Add More Columns Below as Needed */}
                  {/* SME, Structured Products, Equipment Financing, AI Chatbots... */}
                  

          <Link href="/blog" className="hover:text-blue-600">Blogs</Link>
          <Link href="/careers" className="hover:text-blue-600">Careers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>

        {/* Hire Us Button */}
        <div className="flex-shrink-0">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Hire Us →
          </button>
        </div>
      </div>
    </header>
  );
}

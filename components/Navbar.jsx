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
  <Link href="/services" className="cursor-pointer hover:text-blue-600">
  Services ▾
</Link>

  {openMenu === "services" && (
  <div className="fixed top-[64px] left-0 right-0 bg-black shadow-lg z-50 border-t border-gray-200 font-serif">
    <div className="grid grid-cols-4 gap-6 max-w-[1280px] mx-auto px-8 py-8">
      {/* Top Row (4 Columns) */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/securedloans" className="hover:text-blue-600">Secured Loans</Link>
  </div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/securedloans/mortgageloans" className="hover:text-blue-600">Mortgage Loans</Link><br />
    <Link href="/services/securedloans/schoolandcollegefunding" className="hover:text-blue-600">School & College Funding</Link><br />
    <Link href="/services/securedloans/carloansnerandfinancing" className="hover:text-blue-600">Car Loans Ner & Refinancing</Link><br />
    <Link href="/services/securedloans/odcc" className="hover:text-blue-600">OD/CC</Link><br />
    <Link href="/services/securedloans/homeloans" className="hover:text-blue-600">Home Loans</Link><br />
  </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/unsecuredLoans" className="hover:text-blue-600">Unsecured Loans</Link></div>
        <div className="text-white text-sm space-y-1">
          <Link href="/services/unsecuredloans/businessinstallmentloans" className="hover:text-blue-600">Business Installment Loans</Link><br />
          <Link href="/services/unsecuredloans/medicalequipmentloans" className="hover:text-blue-600">Medical Equipment Loans
</Link><br />
          <Link href="/services/unsecuredloans/industrialmachineryloans" className="hover:text-blue-600">Industrial Machinery Loans
</Link><br/>
<Link href="/services/unsecuredloans/constructionequipmentloans" className="hover:text-blue-600">Construction Equipment Loans</Link><br />
          <Link href="/services/unsecuredloans/equipmentrefinancingloans" className="hover:text-blue-600">Equipment Refinancing Loans
</Link><br />
          <Link href="/services/unsecuredloans/professionalloans" className="hover:text-blue-600">Proffesional Loans
</Link><br/>
<Link href="/services/unsecuredloans/personalloans" className="hover:text-blue-600">Personal Loans
</Link><br />
          <Link href="/services/unsecuredloans/educationalloans" className="hover:text-blue-600">Educational Loans
</Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/termloans" className="hover:text-blue-600">Term Loans</Link></div>
        <div className="text-white text-sm space-y-1">
          <Link href="/services/termloans/shorttermloans" className="hover:text-blue-600">Short-Term Loans</Link><br />
          <Link href="/services/termloans/longtermloans" className="hover:text-blue-600">Long-Term Loans
</Link><br />
          <Link href="/services/termloans/creditcards" className="hover:text-blue-600">Credit Cards</Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/corporateloans" className="hover:text-blue-600">Corporate Loans</Link></div>
        <div className="text-white text-sm space-y-1">
          <Link href="/services/corporateloans/workingcapital" className="hover:text-blue-600">Working Capital
</Link><br />
          <Link href="/services/corporateloans/assetfinance" className="hover:text-blue-600">Asset Finance
</Link><br />
          <Link href="/services/corporateloans/leasing" className="hover:text-blue-600">Leasing
</Link><br/>
<Link href="/services/corporateloans/termloans" className="hover:text-blue-600">Term Loans
</Link><br />
          <Link href="/services/corporateloans/structuredfinance" className="hover:text-blue-600">Structed Finance
</Link>
        </div>
      </div>

      {/* Bottom Row (4 Columns) */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><Link href="/sme" className="hover:text-blue-600">SME</Link></div>
        <div className="text-white text-sm space-y-1">
          <Link href="/services/sme/manufacturer" className="hover:text-blue-600">Manufacturer</Link><br />
          <Link href="/services/sme/distributor" className="hover:text-blue-600">Distributor</Link><br/>
          <Link href="/services/sme/retailer" className="hover:text-blue-600">Retailer</Link><br/>
          <Link href="/services/sme/serviceprovider" className="hover:text-blue-600">Service Provider</Link><br />
          <Link href="/services/sme/vendor" className="hover:text-blue-600">Vendor</Link>
        </div>
      </div>

<div className="flex flex-col space-y-2">
  <div className="font-semibold text-white"><Link href="/structuredproducts" className="hover:text-blue-600">Structured Products</Link></div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/structuredproducts/loanagainstsecurities" className="hover:text-blue-600">Loan Against Securities</Link><br />
    <Link href="/services/structuredproducts/structuredinvestments" className="hover:text-blue-600">Structured Investments</Link><br/>
    <Link href="/services/structuredproducts/debtsyndication" className="hover:text-blue-600">Debt Syndication</Link><br />
    <Link href="/services/structuredproducts/letterofcredit" className="hover:text-blue-600">Letter Of Credit</Link><br/>
    <Link href="/services/structuredproducts/leaserentaldiscounting" className="hover:text-blue-600">Lease Rental Discounting</Link><br />
    <Link href="/services/structuredproducts/loanagainstproperty" className="hover:text-blue-600">Loan Against Property</Link>
  </div>
</div>

<div className="flex flex-col space-y-2">
  <div className="font-semibold text-white"><Link href="/equipmentfinancingandleasing" className="hover:text-blue-600">Equipment Financing & Leasing</Link></div>
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
  <div className="font-semibold text-white"><Link href="/aichatbots" className="hover:text-blue-600">AI Chatbots</Link></div>
  <div className="text-white text-sm space-y-1">
    <Link href="/services/aichatbots/chatgptsolutions" className="hover:text-blue-600">ChatGPT Solutions</Link><br />
    <Link href="/services/aichatbots/aichatbotdev" className="hover:text-blue-600">AI Chatbot Dev</Link>
  </div>
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

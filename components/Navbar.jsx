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
    <div className="grid grid-cols-4 gap-6 max-w-[1280px] mx-auto px-8 py-8">
      {/* Top Row (4 Columns) */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/SecuredLoans" className="hover:text-blue-600">Secured Loans</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/SecuredLoans/MortgageLoans" className="hover:text-blue-600">Mortage Loans
</a><br />
          <a href="/SecuredLoans/SchoolCollegeFunding" className="hover:text-blue-600">School & College Funding
</a><br />
          <a href="/SecuredLoans/CarLoans" className="hover:text-blue-600">Car Loans Ner & Refinancing
</a><br />
<a href="/SecuredLoans/ODCC" className="hover:text-blue-600">OD/CC
</a><br />
<a href="/SecuredLoans/HomeLoans" className="hover:text-blue-600">Home Loans
</a><br />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/UnsecuredLoans" className="hover:text-blue-600">Unsecured Loans</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/UnsecuredLoans/BusinessInstallmentLoans" className="hover:text-blue-600">Business Installment Loans</a><br />
          <a href="/UnsecuredLoans/MedicalEquipmentLoans" className="hover:text-blue-600">Medical Equipment Loans
</a><br />
          <a href="/UnsecuredLoans/IndustrialMachineryLoans" className="hover:text-blue-600">Industrial Machinery Loans
</a><br/>
<a href="/UnsecuredLoans/ConstructionEquipmentLoans" className="hover:text-blue-600">Construction Equipment Loans</a><br />
          <a href="/UnsecuredLoans/EquipmentRefinancingLoans" className="hover:text-blue-600">Equipment Refinancing Loans
</a><br />
          <a href="/UnsecuredLoans/ProfessionalLoans" className="hover:text-blue-600">Proffesional Loans
</a><br/>
<a href="/UnsecuredLoans/PersonalLoans" className="hover:text-blue-600">Personal Loans
</a><br />
          <a href="/UnsecuredLoans/EducationalLoans" className="hover:text-blue-600">Educational Loans
</a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/TermLoans" className="hover:text-blue-600">Term Loans</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/TermLoans/ShortTermLoans" className="hover:text-blue-600">Short-Term Loans</a><br />
          <a href="/TermLoans/LongTermLoans" className="hover:text-blue-600">Long-Term Loans
</a><br />
          <a href="/TermLoans/CreditCards" className="hover:text-blue-600">Credit Cards</a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/CorporateLoans" className="hover:text-blue-600">Corporate Loans</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/CorporateLoans/WorkingCapital" className="hover:text-blue-600">Working Capital
</a><br />
          <a href="/CorporateLoans/AssetFinance" className="hover:text-blue-600">Asset Finance
</a><br />
          <a href="/CorporateLoans/Leasing" className="hover:text-blue-600">Leasing
</a><br/>
<a href="/CorporateLoans/TermLoans" className="hover:text-blue-600">Term Loans
</a><br />
          <a href="/CorporateLoans/StructuredFinance" className="hover:text-blue-600">Structed Finance
</a>
        </div>
      </div>

      {/* Bottom Row (4 Columns) */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/SME" className="hover:text-blue-600">SME</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/SME/Manufacturer" className="hover:text-blue-600">Manufacturer</a><br />
          <a href="/SME/Distributor" className="hover:text-blue-600">Distributor</a><br/>
          <a href="/SME/Retailer" className="hover:text-blue-600">Retailer</a><br/>
          <a href="/SME/ServiceProvider" className="hover:text-blue-600">Service Provider</a><br />
          <a href="/SME/Vendor" className="hover:text-blue-600">Vendor</a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/StructuredProducts" className="hover:text-blue-600">Structured Products</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/StructuredProducts/LoanAgainstSecurities" className="hover:text-blue-600">Loan Against Securities
</a><br />
          <a href="/StructuredProducts/StructuredInvestments" className="hover:text-blue-600">Structured Investments
</a><br/>
          <a href="/StructuredProducts/DebtSyndication" className="hover:text-blue-600">Debt Syndication
</a><br />
          <a href="/StructuredProducts/LetterOfCredit" className="hover:text-blue-600">Letter Of Credit
</a><br/>
          <a href="/StructuredProducts/LeaseRentalDiscounting" className="hover:text-blue-600">Lease Rental Discounting</a><br />
          <a href="/StructuredProducts/LoanAgainstProperty" className="hover:text-blue-600">Loan Against Property</a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/EquipmentFinancing" className="hover:text-blue-600">Equipment Financing & Leasing</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/EquipmentFinancing/CapitalGoods" className="hover:text-blue-600">Capital Goods
</a><br />
          <a href="/EquipmentFinancing/ITHardware" className="hover:text-blue-600">IT Hardware
</a><br/>
          <a href="/EquipmentFinancing/OfficeInfrastructure" className="hover:text-blue-600">Office Infrastructure
</a><br />
          <a href="/EquipmentFinancing/Cars" className="hover:text-blue-600">Cars
</a><br/>
          <a href="/EquipmentFinancing/ConstructionEquipment" className="hover:text-blue-600">Construction Equipment
</a><br />
          <a href="/EquipmentFinancing/EnergySavingEquipment" className="hover:text-blue-600">Energy Saving Equipment
</a><br/>
          <a href="/EquipmentFinancing/HealthcareEquipment" className="hover:text-blue-600">Healthcare Equipment
</a><br />
          <a href="/EquipmentFinancing/LogisticsMachinery" className="hover:text-blue-600">Logistics Machinery</a><br/>
          <a href="/EquipmentFinancing/SolarEquipment" className="hover:text-blue-600">Solar Equipment</a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-white"><a href="/AIChatbots" className="hover:text-blue-600">AI Chatbots</a></div>
        <div className="text-white text-sm space-y-1">
          <a href="/AIChatbots/ChatGPTSolutions" className="hover:text-blue-600">ChatGPT Solutions</a><br />
          <a href="/AIChatbots/AIChatbotDev" className="hover:text-blue-600">AI Chatbot Dev</a>
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

import React from "react";
import {
  FaHeartbeat,
  FaMoneyBillAlt,
  FaBed,
  FaBook,
  FaFish,
  FaShoppingCart,
  FaBuilding,
  FaTruck
} from "react-icons/fa";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Healthcare", icon: <FaHeartbeat size={30} /> },
    { name: "Financial", icon: <FaMoneyBillAlt size={30} /> },
    { name: "Hospitality", icon: <FaBed size={30} /> },
    { name: "Education", icon: <FaBook size={30} /> },
    { name: "Information Technology", icon: <FaFish size={30} /> },
    { name: "Retail & Ecommerce", icon: <FaShoppingCart size={30} /> },
    { name: "Real Estate", icon: <FaBuilding size={30} /> },
    { name: "Logistics", icon: <FaTruck size={30} /> }
  ];

  return (
    <div className="bg-black text-white px-6 py-16 ">
      <h2 className="text-3xl font-bold mb-4">Loans at their best - Tailored for you.
</h2>
      <p className="text-base mb-10 ">From first consultation to final disbursement, we’re with you at every step — clear, simple, and supportive.
Your dedicated loan expert ensures fast answers, smart options, and a hassle-free experience.
We serve all sectors with flexible rates, low fees, and financing that truly fits your needs.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-md py-6 px-4 flex flex-col items-center hover:bg-gray-800 transition"
          >
            <div className="mb-3">{item.icon}</div>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}